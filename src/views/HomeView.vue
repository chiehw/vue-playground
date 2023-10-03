<script setup lang="ts">
import { useDevclientStore } from "@/stores/dav";
import { type FileStat } from 'webdav'
import { onMounted, reactive } from "vue";

const storeDav = useDevclientStore()
const state = reactive({
  tableList: [] as FileStat[]
})

async function getDir() {
  if (storeDav.client) {
    const dir = await storeDav.client.getDirectoryContents('/') as FileStat[]
    return dir
  } else {
    return []
  }
}

onMounted(async () => {
  state.tableList = await getDir()
  console.log(state.tableList);
  
})

function handleClick(row: FileStat) {
  if (row.type === 'directory') {
    let dirname = row.filename.split('dav')[1]
    console.log(dirname);

    storeDav.client?.getDirectoryContents(dirname).then((res) => {
      state.tableList = res as FileStat[]
    })
  }
}
</script>

<template>
  
  <div>
    <el-table :data="state.tableList">
      <el-table-column label="名称" prop="basename" width="300px"></el-table-column>
      <el-table-column label="类型">
        <template #default="scoped">
          <el-tag v-if="scoped.row.type === 'directory'" type="success">
            文件夹
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="时间" prop="lastmod" width="400px"></el-table-column>
      <el-table-column label="操作">
        <template #default="scoped">
          <el-button v-if="scoped.row.type === 'directory'" type="primary" size="small" @click="handleClick(scoped.row)">
            打开
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
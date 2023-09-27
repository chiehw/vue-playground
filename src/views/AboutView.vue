<script setup lang="ts">
import { useDevclientStore } from "@/stores/dav";
import type Node from 'element-plus/es/components/tree/src/model/node'
import { type FileStat } from 'webdav'
import { onMounted, reactive } from "vue";

const storeDav = useDevclientStore()
const state = reactive({
  tableList: [] as FileStat[]
})

async function getDir(basedir: string) {
  if (storeDav.client) {
    const dir = await storeDav.client.getDirectoryContents(basedir) as FileStat[]
    return dir
  } else {
    return []
  }
}

onMounted(async () => {
  state.tableList = await getDir('/')
})

onMounted(async () => {

})


</script>

<template>
  <div class="file-tree-container">
    <div class="file-tree-head">
      坚果云
    </div>
    <ul class="file-list">
      <li v-for="item in state.tableList" :key="item.basename">
        <span class="folder-name">{{ item.basename }}</span>
        <!-- <div class="file-tree-icon">
          绘制向右的箭头
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M384 192v640l384-320.064z">
            </path>
          </svg>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<style scoped>
.file-tree-container {
  width: 40vh;
  height: 100vh;
  background-color: #f4f7f9;
}

.file-tree-head {
  width: 100%;
  height: 40px;
  padding: 10px;
}

.file-list,
.file-list ul {
  list-style-type: none;

  border-left: 1px dotted #aaa;
  line-height: 1.8em;
  margin-left: 20px;
  padding-left: 18px;
}

.file-list li span:before {
  display: block;
  content: ' ';
  width: 10px;
  height: 1px;
  position: absolute;
  border-bottom: 1px dotted #aaa;
  top: 0.6em;
  left: -14px;
}

.file-list li:before {
  content: url('../assets/icons/folder_close.svg');
  position: absolute;
  top: 2px;
  left: 0;
  width: 20px;
  height: 20px;
  font-size: 1.3em;
  color: #555;
}



.file-list li {
  position: relative;
  padding-left: 25px;
}

.file-tree-item {
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-left: 10px;
}

.file-tree-item:hover {
  background-color: #E6ECF0;
  cursor: pointer;
}

.file-tree-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: relative;
}
</style>

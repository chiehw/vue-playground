<script setup lang="ts">
import { useDevclientStore } from "@/stores/dav";
import { type FileStat } from 'webdav'
import { onMounted, reactive } from "vue";

interface TreeNode {
  fileState: FileStat,
  isLeaf: boolean,
  children: TreeNode[]
}

const storeDav = useDevclientStore()
const state = reactive({
  tableList: [] as TreeNode[]
})

async function getDirectoryContents(basedir: string) {
  if (storeDav.client) {
    const dirList = await storeDav.client.getDirectoryContents(basedir, { deep: true }) as FileStat[]
    dirList.map((fileItem) => { fileItem.filename = fileItem.filename.split('/..')[1] })
    dirList.splice(0, 1)

    let treeNodeList: TreeNode[] = []
    for (let item of dirList) {
      treeNodeList.push({
        fileState: item,
        isLeaf: false,
        children: [] as TreeNode[]
      })
    }
    return treeNodeList
  } else {
    return []
  }
}

async function getDirectoryContentsByNode(node: TreeNode) {
  let dirList = await getDirectoryContents(node.fileState.filename)
  node.children = dirList
}

onMounted(async () => {
  state.tableList = await getDirectoryContents('/dav')
  console.log(state.tableList);
})

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <!-- <div class="file-tree-container">
    <div class="file-tree-head">
      坚果云
    </div>
    <ul class="file-list">
      <li v-for="treeNode in state.tableList" :key="treeNode.fileState.filename"
        @click="getDirectoryContentsByNode(treeNode)">
        <span class="folder-name">{{ treeNode.fileState.basename }}</span>
        <ul class="file-list">
          <li v-for="child in treeNode.children" :key="child.fileState.basename"
            @click="getDirectoryContentsByNode(child)">
            <span class="folder-name">{{ child.fileState.basename }}</span>
          </li>
        </ul>
      </li>
    </ul>
    

  </div> -->
</template>

<style scoped>
.file-tree-container {
  width: 40vh;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f4f7f9;
}

.file-tree-head {
  width: 100%;
  height: 40px;
  padding: 10px;

  cursor: pointer;
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
  content: url('../assets/icons/folder-dark.svg');

  position: absolute;
  top: 2px;
  left: 0;

  width: 20px;
  height: 20px;

  font-size: 1.3em;
  color: #656D75;
}

.file-list li {
  position: relative;
  padding-left: 25px;
  margin-top: 4px;
  margin-bottom: 4px;
}

.file-list li:hover {
  cursor: pointer;
}
</style>

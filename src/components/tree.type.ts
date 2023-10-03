import { type FileStat } from 'webdav'

export interface TreeNode {
    fileState: FileStat,
    isLeaf: boolean,
    children: TreeNode[]

    show: boolean,
}
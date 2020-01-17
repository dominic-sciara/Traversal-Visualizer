import {BST, treeToArray, insert} from './index'


export default function generate_random_tree() {
    let node = Math.floor((Math.random() * 1000) + 1)
    let root = new BST(node)
    for (let i = 1; i < 10; ++i ) {
        root = insert(root, Math.floor((Math.random() * 1000) + 1))
    }
    let tree = treeToArray(root)
    return {random_tree: tree, random_root: root}
}
import { MAX_TREE_LEVEL } from '../constants'

// TREE CLASS
// basic constructor and insert method
export class BST {
    constructor(value, level = 0, index = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.level = level
        this.index = index;
    }

    insert(value) {
        if ((this.level + 1) >= MAX_TREE_LEVEL) {
            alert('MAX TREE LEVEL REACHED')
            return false
        }
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value, this.level + 1, this.index * 2)
            } else {
                this.left.insert(value)
            }
        }  else {
            if (this.right === null) {
                this.right = new BST(value, this.level + 1, (this.index * 2) + 1)
            } else {
                this.right.insert(value)
            }
        }
        return this
    }
}

// CONVERT TREE CLASS INTO ARRAY
// takes root of BST and returns array representation
// of the trees values
export function treeToArray(head) {
    let tree = emptyTree()
    let current = head
    let queue = [current]
    while (queue.length) {
        current = queue.pop()
        tree[current.level][current.index] = current.value
        if (current.left) {queue.unshift(current.left)}
        if (current.right) {queue.unshift(current.right)}
    }
    return tree
}

// EMPTY TREE
// returns an array representation of an empty tree,
// used for the starting tree in the initial state
export function emptyTree() {
    let t = []
    for (let x = 0; x < MAX_TREE_LEVEL; ++x) {
        t.push(new Array(2 ** x).fill(null))
    }
    return t
}

// TRAVERSE
// get the specific animations for the algorithm that is being passed in,
// then traverses the nodes on the DOM and calls animate 
export async function traverse(animations, speed) {
    const nodes = document.getElementsByClassName('node')
    for (let i = 0; i < animations.length; ++i) {
      animate(nodes, animations, i, 'selected ', i * speed)
    }
    // clear animations
    for (let i = 0; i < animations.length; ++i) {
        animate(nodes, animations, i, 'normal ', (animations.length + i) * speed)
    }
}

// ANIMATOR
// changes the class of one specific DOM element that is passed in
// to provide an animation effect (animation for the class in the css)
export function animate(domNodes, listAnimations, index, className, speed) {
    const nodeIndex = Math.max((((2 ** listAnimations[index].level) - 1) + listAnimations[index].index), 0)
    setTimeout(() => {
        if (domNodes[nodeIndex].className !== 'node') {
            domNodes[nodeIndex].className = `${className}node`;
        }
    }, speed);
}



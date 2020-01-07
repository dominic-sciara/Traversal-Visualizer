import { animate } from './index'
import { ANIMATION_SPEED_MS } from '../constants'

// TREE METHOD
// Removes a node from a binary search tree and replaces with other node
export function del(currentNode, value, parent = null) {
    const nodes = document.getElementsByClassName('node')
    let nodeIndex = Math.max((((2 ** currentNode.level) - 1) + currentNode.index), 0)
    nodes[nodeIndex].className = 'node normal'
    // recursively call del until value is found
    // while keeping track of parent
    if (value < currentNode.value) {
        del(currentNode.left, value, currentNode)
    }
    else if (value > currentNode.value) {
        del(currentNode.right, value, currentNode)
    }
    // value to be removed is found, 4 cases here
    else{
        // case 1: node has 2 children
        if (currentNode.left !== null && currentNode.right !== null) {
            // find min value of right subtree and replace value
            currentNode.value = getMinValue(currentNode.right)
            // remove that min value in the right subtree
            del(currentNode.right, currentNode.value, currentNode)
        }
        // case 2: node is the root
        else if (parent === null) {
            // if the root has a left child
            if (currentNode.left !== null) {
                nodeIndex = Math.max((((2 ** currentNode.left.level) - 1) + currentNode.left.index), 0)
                nodes[nodeIndex].className = 'node normal'

                currentNode.value = currentNode.left.value
                currentNode.right = currentNode.left.right
                currentNode.left = currentNode.left.left
                leveler(currentNode)
            }
            // if the root has no left child but does have a right child
            else if (currentNode.right !== null) {
                nodeIndex = Math.max((((2 ** currentNode.right.level) - 1) + currentNode.right.index), 0)
                nodes[nodeIndex].className = 'node normal'

                currentNode.value = currentNode.right.value
                currentNode.left = currentNode.right.left
                currentNode.right = currentNode.right.right
                leveler(currentNode)
            }
            // if the root is the only node in the tree
            else {
                currentNode.value = null
            }
        }
        // case 3: the node is a left child
        else if (parent.left === currentNode) {
            // manipulate indices and levels of nodes after removal
            let index = currentNode.index
            let level = currentNode.level
            if (currentNode.left !== null) {
                parent.left = currentNode.left
                if (currentNode.left) {
                    nodeIndex = Math.max((((2 ** currentNode.left.level) - 1) + currentNode.left.index), 0)
                    nodes[nodeIndex].className = 'node normal'
                }
            } else {
                parent.left = currentNode.right
                if (currentNode.right) {
                    nodeIndex = Math.max((((2 ** currentNode.right.level) - 1) + currentNode.right.index), 0)
                    nodes[nodeIndex].className = 'node normal'
                }
            }
            if (parent.left !== null) {
                parent.left.index = index
                parent.left.level = level
                parent.left = leveler(parent.left)
            }
        }
        // case 4: the node is a right child
        else if (parent.right === currentNode) {
            // manipulate indices and levels of nodes after removal
            let index = currentNode.index
            let level = currentNode.level
            if (currentNode.left !== null) {
                parent.right = currentNode.left
                if (currentNode.left) {
                    nodeIndex = Math.max((((2 ** currentNode.left.level) - 1) + currentNode.left.index), 0)
                    nodes[nodeIndex].className = 'node normal'
                }
            } else {
                parent.right = currentNode.right
                if (currentNode.right) {
                    nodeIndex = Math.max((((2 ** currentNode.right.level) - 1) + currentNode.right.index), 0)
                    nodes[nodeIndex].className = 'node normal'
                }
            }
            if (parent.right !== null) {
                parent.right.index = index
                parent.right.level = level                
                parent.right = leveler(parent.right)
            }
        }
    }
    return currentNode
}

// Animations for the remove tree method
// mimics the process of removal so the animations can occur before the actual removal
export function getDelAnimations(currentNode, value, parent = null, animations =[]) {
    animations.push({level: currentNode.level, index: currentNode.index})
    // recursively call del until value is found
    // while keeping track of parent
    if (value < currentNode.value) {
        getDelAnimations(currentNode.left, value, currentNode, animations)
    }
    else if (value > currentNode.value) {
        getDelAnimations(currentNode.right, value, currentNode, animations)
    }
    
    // value to be removed is found, 4 cases here
    else{
        animations.push(true)
        // case 1: node has 2 children
        if (currentNode.left !== null && currentNode.right !== null) {
            getDelAnimations(currentNode.right, getMinValue(currentNode.right), currentNode, animations)
        }
        // case 2: node is the root
        else if (parent === null) {
            // if the root has a left child
            if (currentNode.left !== null) {
                animations.push({level: currentNode.left.level, index: currentNode.left.index})
                animations.push(true)
            }
            // // if the root has no left child but does have a right child
            else if (currentNode.right !== null) {
                animations.push({level: currentNode.right.level, index: currentNode.right.index})
                animations.push(true)
            }
           
        }
        // case 3: the node is a left child
        else if (parent.left === currentNode) {
            // blank

            if (currentNode.left !== null) {
                animations.push({level: currentNode.left.level, index: currentNode.left.index})
                animations.push(true)
            } else if (currentNode.right !== null) {
                animations.push({level: currentNode.right.level, index: currentNode.right.index})
                animations.push(true)
            }
            if (parent.left !== null) {
                // blank

            }
        }
        // case 4: the node is a right child
        else if (parent.right === currentNode) {
           
            if (currentNode.left !== null) {
                animations.push({level: currentNode.left.level, index: currentNode.left.index})
                animations.push(true)
            } else if (currentNode.right !== null) {
                animations.push({level: currentNode.right.level, index: currentNode.right.index})
                animations.push(true)
            }
            if (parent.right !== null) {
                // blank
            }
        }
    }
    // manipulating the animations, so there cant be 3 trues
    // for visual purposes only
    let count = 0
    for (let x = 0; x < animations.length; ++x) {
        if (animations[x] == true) {
            count += 1
            if (count > 2) {
                animations.splice(x-1)
                return animations
            }
        }
    }
    return animations
}

// HELPER FUNCTION FOR del TREE METHOD
// returns minimun value of a binary search tree
function getMinValue(currentNode) {
    if (currentNode.left === null) {
        return currentNode.value
    } else {
        return getMinValue(currentNode.left)
    }
}

// CHANGE INDEX AND LEVELS OF NODES AFTER REMOVAL
// another helper function for the removal method
// to ensure correct data is upheld on the nodes 
// after removal
function leveler(node) {
    let current = node
    let queue = [node]
    while (queue.length) {
        current = queue.pop()
        if (current.left !== null) {
            current.left.level = current.left.level - 1
            current.left.index = (current.index * 2)
            queue.unshift(current.left)
        } 
        if (current.right !== null) {
            current.right.level = current.right.level - 1
            current.right.index = ((current.index * 2) + 1)
            queue.unshift(current.right)
        }
    }
    return node
}

export function showDel(animations, speed) {
    const nodes = document.getElementsByClassName('node')

    // run animations
    for (let i = 0; i < animations.length; ++i) {
        while (animations[i] !== true) {
            animate(nodes, animations, i, 'selected ', i * speed)
            i += 1
        }
        // if node was found
        if (animations[i] === true) {
            animate(nodes, animations, i - 1, 'remove ', (i + 1) * 0.8 * speed)
        }
    }
    
}
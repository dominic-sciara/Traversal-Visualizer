import { animate } from './index'

// BINARY SEARCH
export function getBinarySearchAnimations(node, value, animations = []) { 
    if (node === null) {
        animations.push(false)
        return animations
    } else if (value < node.value) {
        animations.push({level: node.level, index: node.index})
        return getBinarySearchAnimations(node.left, value, animations)
    } else if (value > node.value) {
        animations.push({level: node.level, index: node.index})
        return getBinarySearchAnimations(node.right, value, animations)
    } else {
        animations.push({level: node.level, index: node.index})
        animations.push(true)
        return animations
    }
}

export default function showSearch(animations, root, value, speed) {
    let i = 0
    // const animations = getBinarySearchAnimations(root, value)
    const nodes = document.getElementsByClassName('node')
    // run animations
    while (animations[i] !== false && animations[i] !== true) {
        animate(nodes, animations, i, 'selected ', i * speed)
        i += 1
    }
    // if node wasn't or was found
    if (animations[i] === false) {
        setTimeout(() => {
            alert(`${value} NOT FOUND`)
        }, (i+1) * (0.8 * speed));
    } else {
        animate(nodes, animations, i - 1, 'found ', (i+1) * 0.8 * speed)
    }
    // clear animations
    let j = 0
    while (j < i) {
        animate(nodes, animations, j, 'normal ', (i + 1 + j) * 1.5 * speed)
        j += 1
    } 
}
// ITERATIVE PRE ORDER
export default function getPreOrderAnimations(head) {
    if (head === null) {return []} 
    let animations = []
    let current = head
    let stack = [current]
    while (stack.length) {
        current = stack.pop()
        animations.push({level: current.level, index: current.index})
        if (current.right) {stack.push(current.right)}
        if (current.left) {stack.push(current.left)}
    }
    return animations
}
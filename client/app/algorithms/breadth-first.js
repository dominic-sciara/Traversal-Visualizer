// BREADTH FIRST TRAVERSAL
export default function getBfsAnimations(head) {
    if(head === null) {return []}
    let animations = []
    let current = head
    let queue = [current]
    while (queue.length) {
        current = queue.pop()
        animations.push({level: current.level, index: current.index})
        if (current.left) {queue.unshift(current.left)}
        if (current.right) {queue.unshift(current.right)}
    }
    return animations
}
// RECURSIVE IN ORDER
export default function getInOrderAnimations(head, animations = []) {
    if (head !== null && head.left !== null) {getInOrderAnimations(head.left, animations)}
    if (head !== null) {animations.push({level: head.level, index: head.index})}
    if (head !== null && head.right !== null) {getInOrderAnimations(head.right, animations)}
    return animations
}
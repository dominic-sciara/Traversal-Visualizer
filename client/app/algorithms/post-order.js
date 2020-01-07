// RECURSIVE POST ORDER
export default function getPostOrderAnimations(head, animations = []) {
    if (head !== null && head.left !== null) {getPostOrderAnimations(head.left, animations)}
    if (head !== null && head.right !== null) {getPostOrderAnimations(head.right, animations)}
    if (head !== null) { animations.push({level: head.level, index: head.index})}
    return animations
}
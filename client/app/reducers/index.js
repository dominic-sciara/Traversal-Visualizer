import { BST, treeToArray, traverse, emptyTree } from '../algorithms'
import { del, showDel, getDelAnimations } from '../algorithms/remove'
import showSearch, { getBinarySearchAnimations } from '../algorithms/binary-search'
import showBreadFirst from '../algorithms/breadth-first'
import showPreOrder from '../algorithms/pre-order'
import showInOrder from '../algorithms/in-order'
import showPostOrder from '../algorithms/post-order' 



//INITIAL STATE
const initialState = {
    tree: emptyTree(),
    root: null,
    speed: 600,
    toolbar_lock: false
}


//ACTION TYPES
const RESET = 'RESET';
const INSERT = 'INSERT';
const REMOVE = 'REMOVE'
const SLIDE = 'SLIDE'
const LOCK_TOOLBAR = 'LOCK_TOOLBAR'
const UNLOCK_TOOLBAR = 'UNLOCK_TOOLBAR'


//ACTION CREATORS
export const reset = () => ({
    type: RESET
});
export const insert = (value) => ({
    type: INSERT,
    value
});
export const remove = (value) => ({
    type: REMOVE,
    value
});
export const slide = (value) => ({
    type: SLIDE,
    value
})
export const lock_toolbar = () => ({
    type: LOCK_TOOLBAR
})
export const unlock_toolbar = () => ({
    type: UNLOCK_TOOLBAR
})

//THUNK CREATORS
export const search = (speed, root, value) => {
    return dispatch => {
        const search_animations = getBinarySearchAnimations(root, value)
        dispatch(lock_toolbar())
        const timer = (search_animations.length * 2.3 * speed)
        showSearch(search_animations, root, value, speed)
        setTimeout(() => {
            dispatch(unlock_toolbar())
        }, timer);
    }
}

export const breadth_first = (speed, root) => {
    return dispatch => {
        const BF_animations = showBreadFirst(root)
        dispatch(lock_toolbar())
        const timer = (BF_animations.length * 2.1 * speed)
        traverse(BF_animations, speed)
        setTimeout(() => {
            dispatch(unlock_toolbar())
        }, timer);
    }
}

export const pre_order = (speed, root) => {
    return dispatch => {
        const PO_animations = showPreOrder(root)
        dispatch(lock_toolbar())
        const timer = (PO_animations.length * 2.1 * speed)
        traverse(PO_animations, speed)
        setTimeout(() => {
            dispatch(unlock_toolbar())
        }, timer);
    }
}

export const in_order = (speed, root) => {
    return dispatch => {
        const IO_animations = showInOrder(root)
        dispatch(lock_toolbar())
        const timer = (IO_animations.length * 2.1 * speed)
        traverse(IO_animations, speed)
        setTimeout(() => {
            dispatch(unlock_toolbar())
        }, timer);
    }
}

export const post_order = (speed, root) => {
    return dispatch => {
        const POO_animations = showPostOrder(root)
        dispatch(lock_toolbar())
        const timer = (POO_animations.length * 2.1 * speed)
        traverse(POO_animations, speed)
        setTimeout(() => {
            dispatch(unlock_toolbar())
        }, timer);
    }
}


//REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET:
            return {...state, tree: emptyTree(), root: null}
        case INSERT:
            let clone
            if (state.root !== null) {
                // clone root (so redux-logger correctly shows before/after state)
                clone = Object.assign( Object.create( Object.getPrototypeOf(state.root)), state.root)
                clone.insert(action.value)
            } else {
                clone = new BST(action.value)
            }
            return {...state, root: clone, tree: treeToArray(clone)}
        case REMOVE:
            // clone root (so redux-logger correctly shows before/after state)
            let newRoot = Object.assign( Object.create( Object.getPrototypeOf(state.root)), state.root)
            
            newRoot = del(newRoot, action.value)
            let tree = treeToArray(newRoot)
            if (newRoot.value === null) {
                newRoot = null
            } 
            return {...state, root: newRoot, tree}
        case LOCK_TOOLBAR:
            return {...state, toolbar_lock: true}
        case UNLOCK_TOOLBAR:
            return {...state, toolbar_lock: false}
        case SLIDE:
            return {...state, speed: action.value}
        default:
            return state;
    }
}

export default reducer;

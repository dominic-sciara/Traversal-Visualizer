import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showDel, getDelAnimations } from '../../../algorithms/remove'
import { remove, unlock_toolbar, lock_toolbar } from '../../../reducers'
import store from '../../../store'
import './TreeNode.css'

const TreeNode = (props) => {
    const dispatch = useDispatch()
    const depth = props.depth
    const index = props.index
    const value = useSelector(state => state.tree[depth][index])
    const chrome = props.chrome
    function removeHandler() {
        // used the store.getState() method here instead of using a useSelector 
        // for root and speed to avoid unnecessary re-renders
        const root = store.getState().root
        const speed = store.getState().speed


        let animations = getDelAnimations(root, value)
        dispatch(lock_toolbar())
        showDel(animations, speed)
        // To give the animations time to run
        setTimeout(() => {
            dispatch(unlock_toolbar())
            dispatch(remove(value))
        }, animations.length * 1.5 * speed);
    }

    if (value === null) {
        // blank node
        return (
            <div className="node" key={`${depth}${index}`} style={{backgroundColor: 'white'}} />
        )
    } else {
        if (chrome) {
            return (
                <div  className="node normal" level={depth} index={index} style={{marginTop: '30px'}} >
                    <p id='value'>{value}</p>
                    <div className="outer">
                        <div className="inner">
                            <label onClick={removeHandler}>Remove</label>
                        </div>
                    </div> 
                </div>
            )
        } else {
            return (
                <div  className="node normal" level={depth} index={index} style={{marginTop: '30px'}} >
                    <p id='value'>{value}</p>
                    <p id='default' onClick={removeHandler}>Remove</p>
                    
                </div>
            )
        }
    }

}
export default TreeNode; 
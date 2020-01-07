import React from 'react';
import TreeNode from '../TreeNode'
import './TreeLevel.css'

const TreeLevel = (props) => {
    const level = new Array(2 ** props.level).fill(null)
    return (
        <div className='level' key={level}> 
            {
                level.map((node, index) => {
                return (
                    <TreeNode key={`${index}${level}`} depth={props.level} index={index} />
                )
            })}
        </div>
    ) 
}

export default TreeLevel
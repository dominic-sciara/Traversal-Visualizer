import React from 'react';
import TreeLevel from '../TreeLevel'
import { useSelector } from 'react-redux'
import './TreeContainer.css';

const TreeContainer = () => {
  const depth = useSelector(state => state.tree.length)
  return (
    <div>
      <div className="tree-container">
        { new Array(depth).fill(null).map((blank, level) => <TreeLevel key={level} level={level} />) }
      </div>
    </div>
  )
}
export default TreeContainer
import React from 'react';
import TreeLevel from '../TreeLevel'
import { useSelector } from 'react-redux'
import './TreeContainer.css';

function checkChrome() { 
  return navigator.userAgent.includes('Chrome')
}

const TreeContainer = () => {
  const depth = useSelector(state => state.tree.length)
  const chrome = checkChrome()
  return (
    <div>
      <div className="tree-container">
        { new Array(depth).fill(null).map((blank, level) => <TreeLevel chrome={chrome} key={level} level={level} />) }
      </div>
    </div>
  )
}
export default TreeContainer
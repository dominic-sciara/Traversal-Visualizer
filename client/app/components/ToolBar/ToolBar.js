import React, { Component } from 'react';
import SearchButton from './SearchButton'
import InsertButton from './InsertButton'
import Slider from './Slider'
import store from '../../store'



class ToolBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.lock_status === false) {
            return (
                <header>
                    <div className='logo'>
                        <p>Traversal Visualizer</p>
                        <a id='name' href="https://www.linkedin.com/in/dominicsciara/" target="_blank">By Dominic Sciara</a>
                    </div>
                    <ul className='tool-buttons'> 
                        <li> <SearchButton lock_status={this.props.lock_status} /> </li>
                        <li> <InsertButton lock_status={this.props.lock_status} /> </li>
                        <li>
                            <div className='traversal-buttons'>
                                    <div>
                                        <button onClick={() => this.props.breadthFirst(store.getState().speed, store.getState().root)}>Breadth-First</button>
                                        <button onClick={() => this.props.preOrder(store.getState().speed, store.getState().root)}>Pre-Order</button>
                                        <button onClick={() => this.props.inOrder(store.getState().speed, store.getState().root)}>In-Order</button>
                                        <button onClick={() => this.props.postOrder(store.getState().speed, store.getState().root)}>Post-Order</button>
                                    </div>
                                    <div>
                                        <Slider />
                                        <div>
                                            <button onClick={this.props.generate}  id='gen'> Generate Random Tree </button>
                                            <button onClick={this.props.reset}  id='reset'> Reset Tree </button>
                                        </div>    
                                    </div>
                            </div>
                        </li>
                    </ul>
                </header>
            )
        } else {
            return (
                <header>
                     <div className='logo'>
                        <p>Traversal Visualizer</p>
                        <a id='name' href="https://www.linkedin.com/in/dominicsciara/" target="_blank">By Dominic Sciara</a>
                    </div>
                    <ul className='tool-buttons'> 
                        <li> <SearchButton lock_status={this.props.lock_status}/> </li>
                        <li> <InsertButton lock_status={this.props.lock_status}/> </li>
                        <li>
                            <div className='traversal-buttons'>
                                    <div className='locked'>
                                        <button>Breadth-First</button>
                                        <button>Pre-Order</button>
                                        <button>In-Order</button>
                                        <button>Post-Order</button>
                                    </div>
                                    <div>
                                        <Slider />
                                        <div>
                                            <button id='locked-gen'> Generate Random Tree </button>
                                            <button id='locked-reset'> Reset Tree </button>
                                        </div>
                                    </div>
                            </div>
                        </li>
                    </ul>
                </header>
            )
        }
        
    }
}
export default ToolBar
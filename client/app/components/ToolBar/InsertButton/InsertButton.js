import React, { Component } from 'react';

import '../ToolBar.css'

class InsertButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            insert: this.props.insertNode,
            input: ''
        }
        this.SubmitHandler = this.SubmitHandler.bind(this)
        this.checkInput = this.checkInput.bind(this)
    }
    SubmitHandler(event) {

        // check if valid number
        if (isNaN(Number(this.state.input))) {
            alert('Please Input a Integer (-99999 through 99999)')
            this.setState({input: ''})
            event.preventDefault()
            return
        }
         this.state.insert(Number(this.state.input))
         this.setState({input: ''})
        event.preventDefault()
    }

     // validator for inout
    checkInput(event) {
        const min = -99999
        const max = 99999
        const value = Number(event.target.value)
        if (value > 0) {
            this.setState({input: (Math.min(value, max))})
        } else if (value < 0) {
            this.setState({input: (Math.max(value, min) )})
        } else {
            this.setState({input: event.target.value })
        }
    }
    
    render() {
        if (this.props.lock_status === false) {
            return (
                <div>
                    <form onSubmit={this.SubmitHandler} >
                    <span className="form-input">
                            <input placeholder="Insert Node" type="text" className={'form-input'} value={this.state.input} onChange={this.checkInput} />
                            <span></span>
                        </span>	
                        <input className='form-button' type="submit" value="Insert" />
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={(event) => {event.preventDefault()}} >
                    <span className="form-input">
                            <input placeholder="Insert Node" type="text" className={'form-input'} value={this.state.input} onChange={this.checkInput} />
                            <span></span>
                        </span>	
                        <input style={{backgroundColor: 'darkolivegreen'}} className='form-button' type="submit" value="Insert" />
                    </form>
                </div>
            )
        }
    }
}

export default InsertButton; 
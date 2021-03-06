import React, {Component} from 'react'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue}
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input type="text" onChange={this.handlerChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field
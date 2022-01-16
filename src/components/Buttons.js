import React from 'react'
import './Buttons.css'

export class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e) {
        this.props.handleClick(e.target.value);
    }

    render() {
        return(
            <div className="Numbers">
                <div><input type='button' value='9' onClick={this.handleClick}/></div>
                <div><input type='button' value='8' onClick={this.handleClick}/></div>
                <div><input type='button' value='7' onClick={this.handleClick}/></div>
                <div><input type='button' value='6' onClick={this.handleClick}/></div>
                <div><input type='button' value='5' onClick={this.handleClick}/></div>
                <div><input type='button' value='4' onClick={this.handleClick}/></div>
                <div><input type='button' value='3' onClick={this.handleClick}/></div>
                <div><input type='button' value='2' onClick={this.handleClick}/></div>
                <div><input type='button' value='1' onClick={this.handleClick}/></div>
                <div><input type='button' value='0' onClick={this.handleClick}/></div>
                <div><input type='button' value='+' onClick={this.handleClick}/></div>
                <div><input type='button' value='-' onClick={this.handleClick}/></div>
                <div><input type='button' value='*' onClick={this.handleClick}/></div>
                <div><input type='button' value='/' onClick={this.handleClick}/></div>
                <div><input type='button' value='CE' onClick={this.handleClick}/></div>
                <div><input type='button' value='=' onClick={this.handleClick}/></div>
            </div>
        );
    }
} 
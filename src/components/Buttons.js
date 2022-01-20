import React from 'react'
import './Buttons.css'

export class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = { lastEval : false, lastOperator: false};
        this.handleOperands = this.handleOperands.bind(this)
        this.handleOperations = this.handleOperations.bind(this)
        this.handleOperators = this.handleOperators.bind(this)

    }

    handleOperands(e) {
        if(this.state.lastEval) {
            this.props.handleClick(e.target.value)
        } else {
            this.props.handleClick(this.props.exp + e.target.value)
        }
        this.setState({lastEval: false, lastOperator: false})
    }

    handleOperators(e) {
        if(this.state.lastEval || this.props.exp==='') {
           if(e.target.value==='+' || e.target.value==='-') {
            this.props.handleClick(e.target.value)
           }
        } else if(this.state.lastOperator) {
            this.props.handleClick(this.props.exp.substring(0, this.props.exp.length-1) + e.target.value)
        } else {
            this.props.handleClick(this.props.exp + e.target.value)
        }
        this.setState({lastEval: false, lastOperator: true})
    }

    handleOperations(e) {
        if(e.target.value === 'CE') {
            if(this.state.lastEval) {
                this.props.handleClick('')
            } else {
                this.props.handleClick(this.props.exp.substring(0, this.props.exp.length-1))
            }
            this.setState({lastEval: false, lastOperator: false})
        } else if (e.target.value === '=') {
            let expression = "return " + this.props.exp
            this.props.handleClick(Function(expression)())
            this.setState({lastEval: true, lastOperator: false})
        }
    }

    render() {
        let operators = ['+', '-', '*', '/']
        let operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let operations = ['CE', '=']

        let items = operators.map((operator) =>
            <div key={operator}><input type='button' value={operator} onClick={this.handleOperators}/></div>
        )

        items = items.concat(operands.map((operand) =>
            <div key={operand}><input type='button' value={operand} onClick={this.handleOperands}/></div>
        ))

        items = items.concat(operations.map((operation) =>
            <div key={operation}><input type='button' value={operation} onClick={this.handleOperations}/></div>
        ))
        
        return(
            <div className="Numbers">
               {items}
            </div>
        );
    }
} 
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
        if( this.state.lastEval) {
            this.props.handleClick(this.props.exp + e.target.value)
        }
        else if(this.props.exp==='') {
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

        let buttons = [['+', 'handleOperators'],
                        ['-', 'handleOperators'],
                        ['*', 'handleOperators'],
                        ['/', 'handleOperators'],
                        ['0', 'handleOperands'],
                        ['1', 'handleOperands'],
                        ['2', 'handleOperands'],
                        ['3', 'handleOperands'],
                        ['4', 'handleOperands'],
                        ['5', 'handleOperands'],
                        ['6', 'handleOperands'],
                        ['7', 'handleOperands'],
                        ['8', 'handleOperands'],
                        ['9', 'handleOperands'],
                        ['CE', 'handleOperations'],
                        ['=', 'handleOperations']]

        let items = buttons.map((button) => {
            try {
                return <div key={button[0]}><input type='button' value={button[0]} onClick={eval("this."+button[1])}/></div>
            } catch(e) {
                console.log(e)
                // alert('Oops ! error, we will look into this')
            }
            // console.log(Buttons["handleOperations"](arguments))
            // if(button[1]==='handleOperators') {
            //     return <div key={button[0]}><input type='button' value={button[0]} onClick={eval("this."+button[1])}/></div>
            // } else if(button[1]==='handleOperands') {
            //     return <div key={button[0]}><input type='button' value={button[0]} onClick={this.handleOperands}/></div>
            // } else if(button[1]==='handleOperations') {
            //     return <div key={button[0]}><input type='button' value={button[0]} onClick={this.handleOperations}/></div>
            // } else {
            //     alert('Data error, we will look into this')
            // }
        })
        
        return(
            <div className="Numbers">
               {items}
            </div>
        );
    }
} 
import React, { Component } from 'react';
import './Box.css'

class Box extends Component {    

    static defaultProps = {
        color: ['black', 'green', 'brown', 'pink', 'violet', 'steelblue', 'yellow']
    }
    state = {
        color: this.props.color[Math.floor(Math.random()*this.props.color.length)],
        colors: this.props.color
    }
    

    clickHandler (){
        this.setState((oldState) => {
            let newColor = oldState.colors[Math.floor(Math.random()*this.state.colors.length)]
            let newState = {
                ...oldState,
                color: this.state.color == newColor ? this.clickHandler() : newColor
            }
            return newState;
        })
    } 

    render() {
        
        return (
            <div className={this.state.color} 
            onClick={this.clickHandler.bind(this)}>
            </div>
        )
    }
}

export default Box;
import React, { Component } from 'react';
import Box from '../Box/Box'
import './Boxes.css'


class Boxes extends Component {
    
    state = {
        color : new Array(18).fill(undefined)
    }

    render() {
        
        const boxes = this.state.color.map(() => {
            return <Box/>
        })

        return (
            <div className="Boxes">
                {boxes}
            </div>
        )
    }
}

export default Boxes;
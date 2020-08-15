import React, {useState, useEffect} from 'react'

class Mouse extends React.Component  {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render(){
        return(
            <div    style={{height: '100vh'}}
                    onMouseMove={this.handleMouseMove}
            >
                
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        )
    }
}

export default Mouse;
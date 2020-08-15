import React, {useState, useEffect} from 'react'
import Cat from './Cat'

class MouseWithCat extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {            
            x:0,
            y:0                        
        }
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleMouseMove(event){
        this.setState({x: event.ClientX,
                       y: event.ClientY})
    }
    render(){
        return(
            <div
                style={{height: '100vh'}}
                onMouseMove={this.handleMouseMove}
            >
                <Cat mouse={this.state}></Cat>
            </div>
        )        
    }

}
export default MouseWithCat;
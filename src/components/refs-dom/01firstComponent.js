import React, {useState, useEffect} from 'react'
class FirstComponent extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return(
            <div ref={this.myRef}></div>
        )
    }
}
export default FirstComponent;
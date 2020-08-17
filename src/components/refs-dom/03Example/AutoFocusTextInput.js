import React, {useState, useEffect} from 'react'
import CustomTextInput from './CustomTextInput'
class AutoFocusTextInput extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }
    componentDidMount(){
        this.textInput.current.focusTextInput();
    }
    render(){
        return(
            <CustomTextInput ref={this.textInput}></CustomTextInput>
        )
    }
}
export default AutoFocusTextInput;
import React, {useState, useEffect} from 'react'
class CustomTextInput extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput(e){
        this.textInput.current.focus();
    }
    render(){
        return(
            <>
                <input
                    type="text"
                    ref={this.textInput}
                >
                </input>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                >
                </input>
            </>
        )
    }
}
export default CustomTextInput;
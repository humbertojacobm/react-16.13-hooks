import React, {useState, useEffect} from 'react'
class CustomTextInput extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.textInput = null;
        
        this.focusTextInput = this.focusTextInput.bind(this);
        this.setTextInputRef = (element) => {
            this.textInput = element; 
        }
    }
    focusTextInput(e){
        if(this.textInput) this.textInput.focus();
    }
    componentDidMount(){
        this.focusTextInput();
    }
    render(){
        return(
            <>
                <input
                    type="text"
                    ref={this.setTextInputRef}
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
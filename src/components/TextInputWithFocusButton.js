import React, {useState, useEffect, useRef, useReducer} from 'react'

function TextInputWithFocusButton(){

    const inputEl = useRef(null);
    const onButtonClick = (e) =>{
        inputEl.current.focus();
        e.preventDefault();
    }
    return(
        <>
            <input ref={inputEl}></input>
            <button onClick={onButtonClick}>
                Focus the input
            </button>
        </>
    )
}

export default TextInputWithFocusButton;
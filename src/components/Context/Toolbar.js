import React, {useState, useEffect} from 'react'
import ThemedButton from './themed-button'
//props.changeTheme
const Toolbar = (props) =>{
    return(
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}
export default Toolbar;
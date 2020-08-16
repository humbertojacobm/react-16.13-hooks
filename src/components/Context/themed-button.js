import React, {useState, useEffect} from 'react'
import {ThemeContext} from './theme-context'

// eslint-disable-next-line no-unused-vars
class ThemedButton extends React.Component{
    // eslint-disable-next-line react/require-render-return
    render(){
        let props = this.props;
        let theme = this.context;
        return(
            <button
                {...props}
                style={{background: theme.background}}
            >
                Change Theme
            </button>
        )        
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
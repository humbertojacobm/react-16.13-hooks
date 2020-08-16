import React, {useState, useEffect} from 'react'
import {ThemeContext, UserContext} from './theme-context'
import Layout from './Layout'
//props.signedUser => {name: 'humberto'}
//props.theme = > 'dark'
const AppMultiContext = (props) => {
    const {signedUser, theme} = props;
    return(
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={signedUser}>
                <Layout/>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}
export default AppMultiContext;
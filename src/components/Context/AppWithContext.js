import React, {useState, useEffect} from 'react'
import {themes, ThemeContext} from './theme-context'
import Toolbar from './Toolbar'
import ThemedButton from './themed-button'

class AppWithContext extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            theme: themes.light
        }
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    toggleTheme(){
        this.setState((st)=>{
            return(
                {
                    theme: st.theme ===  themes.dark ? themes.light : themes.dark
                }
            )
        })
    }

    render(){
        return(
            <div>
                <ThemeContext.Provider value = {this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}></Toolbar>
                </ThemeContext.Provider>
                <section>
                    <ThemedButton></ThemedButton>
                </section>
            </div>
        )
    }
}
export default AppWithContext;
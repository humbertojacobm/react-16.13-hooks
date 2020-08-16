import React, {useState, useEffect} from 'react'
import {ThemeContext,themes } from './theme-context'
import Content from './Content'
class AppWithContext2 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        }
        
    }
    toggleTheme(){
        this.setState(s=>({
            theme: s.theme === themes.dark ? themes.light : themes.dark
        }))
    }
    render() {
        // The entire state is passed to the provider
        return (
          <ThemeContext.Provider value={this.state}>
            <Content />
          </ThemeContext.Provider>
        );
      }
}
export default AppWithContext2;
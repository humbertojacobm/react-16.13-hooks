import React, {useState, useEffect} from 'react';
import Toolbar from './Toolbar'

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

export const ThemeContext = React.createContext(themes.light);

function ComponentWithContext(){
    return(
        <ThemeContext.Provider value={themes.dark} >
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

export default ComponentWithContext;
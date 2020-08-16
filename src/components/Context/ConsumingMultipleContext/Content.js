import React, {useState, useEffect} from 'react'
import ProfilePage from './ProfilePage'
import {UserContext,ThemeContext} from './theme-context'
function Content() {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <UserContext.Consumer>
              {
                user => (
                  <ProfilePage  user={user} 
                                theme={theme} />              
                )
              }        
            </UserContext.Consumer>            
          )
        }
      </ThemeContext.Consumer>      
    );
  }
export default Content;
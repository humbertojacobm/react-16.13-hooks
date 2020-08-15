import React, {useState, useEffect} from 'react'
import MouseWithCat from './MouseWithCat'
import Mouse from './Mouse'
import Cat from './Cat'

const MouseTracker = (props) =>{
    return(
        <>
            <h1>Mouse the mouse around</h1>            
            <Mouse
                render={
                    (x)=>(
                        <Cat mouse={x}></Cat>
                    )
                }
            >                
            </Mouse>
        </>
    )
}

export default MouseTracker
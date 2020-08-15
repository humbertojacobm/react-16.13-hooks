import React, {useState, useEffect} from 'react'
import MouseWithCat from './MouseWithCat'

const MouseTracker = (props) =>{
    return(
        <>
            <h1>Mouse the mouse around</h1>            
            <MouseWithCat></MouseWithCat>
        </>
    )
}

export default MouseTracker
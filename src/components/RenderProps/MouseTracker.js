import React, {useState, useEffect} from 'react'
import Mouse from './Mouse'

const MouseTracker = (props) =>{
    return(
        <>
            <h1>Mouse the mouse around</h1>
            <Mouse/>
        </>
    )
}

export default MouseTracker
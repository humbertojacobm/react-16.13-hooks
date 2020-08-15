import React, {useState, useEffect} from 'react'
//props.mouse => {x: 0, y: 0}
const Cat = (props) => {    
    const mouse = props.mouse;
    return(
        // eslint-disable-next-line jsx-a11y/alt-text
        <img    src="./cat.jpg"
                style={
                        {
                            position: 'absolute',
                            left: mouse.x,
                            top: mouse.y
                        }
                }
        >
        </img>
    )
}
export default Cat;
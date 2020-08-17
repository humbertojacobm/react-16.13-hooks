import React from 'react'
import FancyButton from './FancyButton';
const UsingFancyButton = () => {

    const ref = React.createRef();
    return(
        <FancyButton ref={ref}>Click me!</FancyButton>
    )
}
export default UsingFancyButton;


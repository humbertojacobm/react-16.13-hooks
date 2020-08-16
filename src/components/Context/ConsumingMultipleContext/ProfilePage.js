import React, {useState, useEffect} from 'react'
//props.user => {name:'humberto'}
//props.theme => 'dark'
const ProfilePage = (props) => (
    <>
        <p>User: {props.user.name}</p>
        <p>Theme: {props.theme}</p>
    </>    
)
export default ProfilePage;
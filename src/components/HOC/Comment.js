import React, {useState, useEffect} from 'react'

const Comment = (props) => {

    return (
    <p>{props.comment.message}</p>
    )
}
export default Comment;
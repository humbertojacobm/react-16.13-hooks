import React, {useState, useEffect} from 'react'
import ChatAPI from './ChatApi.model'


function FriendStatus(props){
    const [isOnline, setIsOnline] = useState(null);

    useEffect(()=>{
        function handleStatusChange(status){
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

        return function cleanUp(){
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
        }

    })

    if(isOnline === null){
        return 'Loading...'
    }
    return  isOnline ? 'Online': 'Offline'
}

export default FriendStatus;
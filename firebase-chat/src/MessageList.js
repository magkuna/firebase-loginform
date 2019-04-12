import React from 'react'



import Message from './Message'

import List from '@material-ui/core/List'
import { auth } from './firebaseConfig'

const MessageList = (props) => {
    const messagesArray = (
        Object.entries(props.messages || {})
            .map(
                ([key, value]) => ({
                    ...value,
                    key,
                })
            )
            .reverse()
    )

    const filteredMessages = messagesArray.filter(
        message => message.isFav && message.isFav[auth.currentUser.uid]
    )
    const showedMessage = (
        props.isFavFilterActive ?
            filteredMessages
            :
            messagesArray
    )
    return (
        <List>
            {
                showedMessage.map(
                    message => (
                        <Message
                            key={message.key}
                            message={message}
                            toggleFavourite={props.toggleFavourite}
                        />

                    )
                )
            }
        </List>
    )
}

export default MessageList

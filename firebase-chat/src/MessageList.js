import React from 'react'

import Message from './Message'

import List from '@material-ui/core/List'

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
    return (
        <List>
            {
                messagesArray.map(
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

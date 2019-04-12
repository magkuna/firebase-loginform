import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    const messagesArray = (
        Object.entries(props.messages || {})
            .map(
                ([key, value]) => ({
                    ...value,
                    key,
                })
            )
    )
    return (
        <div>
            {
                messagesArray.map(
                    message => (
                        <Message
                            key={message.key}
                            message={message}
                            />
    
                    )
                )
            }
        </div>
    )
}

export default MessageList

import React from 'react'

import MessageList from './MessageList'
import NewMessageForm from './NewMessageForm'


class Chat extends React.Component {
    state = {
        messages: null,
        newMessageText: ''
    }

    render() {
        return (
            <div>
                <MessageList 
                messages={this.state.messages}
                />
                <NewMessageForm
                newMessageText= {this.state.newMessageText} />

            </div>
        )
    }
}

export default Chat
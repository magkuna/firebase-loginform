import React from 'react'

import { auth, database } from './firebaseConfig'
import Snackbar from '@material-ui/core/Snackbar'

import MessageList from './MessageList'
import NewMessageForm from './NewMessageForm'

class Chat extends React.Component {
  state = {
    messages: null,
    newMessageText: '',
    isSnackbarOpen: false,
    snackbarMessage: '',
    isFavFilterActive:false
  }

  componentDidMount() {
    database.ref('JFDDL7/chat').on(
      'value',
      (snapshot) => this.setState({
        messages: snapshot.val()
      })
    )
  }

  componentWillUnmount() {
    database.ref('JFDDL7/chat').off()
  }

  onNewMessageTextChanged = (event) => this.setState({
    newMessageText: event.target.value,
  })

  onMessageSent = () => {
    database.ref('JFDDL7/chat').push({
      text: this.state.newMessageText,
      date: Date.now(),
      author: {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
      }
    })
      .then(
        () => {
          this.setState({
            newMessageText: '',
            isSnackbarOpen: true,
            snackbarMessage: 'Wysłano wiadomość!'
          })
        }
      )
  }

  toggleFavourite = (message) => {
    const currentUserUid = auth.currentUser.uid
    const isFav = message.isFav && message.isFav[currentUserUid]

    const ref = database.ref(`JFDDL7/chat/${message.key}/isFav/${currentUserUid}`)

    if (isFav) {
      ref.remove()
    } else {
      ref.set(true)

    }

  }
  toggleFavFilterActive = () => this.setState({
    isFavFilterActive: !this.state.isFavFilterActive

  })

  render() {
    return (
      <div>
        <MessageList
          messages={this.state.messages}
          toggleFavourite={this.toggleFavourite}
          isFavFilterActive={this.state.isFavFilterActive}

        />
        <NewMessageForm
          newMessageText={this.state.newMessageText}
          onNewMessageTextChanged={this.onNewMessageTextChanged}
          onMessageSent={this.onMessageSent}

          isFavFilterActive ={this.state.isFavFilterActive}
          toggleFavFilterActive= {this.toggleFavFilterActive}
        />
        <Snackbar
          autoHideDuration={2000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={this.state.isSnackbarOpen}
          onClose={() => this.setState({ isSnackbarOpen: false })}
          message={this.state.snackbarMessage}
        />
      </div>
    )
  }
}

export default Chat
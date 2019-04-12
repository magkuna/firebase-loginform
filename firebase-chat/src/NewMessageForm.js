import React from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const styles = {
    paper: {
        padding: 20,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box'
    }
}

const NewMessageForm = (props) => (
    <div>
        <Paper
            style={styles.paper}
        >
            <form
                onSubmit={event => {
                    event.preventDefault()
                    props.onMessageSent()
                }}
            >
                <TextField
                    label={'Wpisz wiadomość...'}
                    fullWidth
                    value={props.newMessageText}
                    onChange={props.onNewMessageTextChanged}
                />

            </form>
        </Paper>
    </div>
)

export default NewMessageForm

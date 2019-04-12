import React from 'react'

import {auth, googleProvider} from './firebaseConfig'

import Button from '@material-ui/core/Button'
//import { url } from 'inspector';

const styles = {
    root: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    button: {
        backgroundColor: 'purple',
        color: 'white',
        marginTop: 10


    }
}


class Auth extends React.Component {
    state = {
        isUSerLoggedIn: false

    }

    componentDidMount (){
        auth.onAuthStateChanged (
            (user) => {
                if (user) {
                    this.setState({ isUserLoggedIn: true})
                } else {
                    this.setState({isUserLoggedIn: false})
                }
            }
        )
    }
    onLogInByGoogleClick =  () => {
        auth.signInWithPopup (googleProvider)
        .catch(console.log)


    }
    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        this.props.children
                        :
                        <div
                        style={styles.root}
                      >
                      <b>JFDDL7 Chat</b>
                            <Button
                                variant={'contained'}
                                style={styles.button}
                                onClick={this.onLogInByGoogleClick}
                            >
                                Login by GOOGLE
            
                    </Button>
                        </div>
                }
            </div>

        )
    }
}


export default Auth
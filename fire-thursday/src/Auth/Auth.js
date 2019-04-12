import React from 'react'

import Forms from './Forms'
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'

class Auth extends React.Component {
    state = {
        isUserLoggedIn: false,
        email: 'email',
        password: 'password'
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    onEmailChange = (event) =>
        this.setState({ email: event.target.value })

    onPasswordChange = (event) =>
        this.setState({ password: event.target.value })

    onLogInClick = () => {
        auth.signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .then(() => this.setState({ isUserLoggedIn: true }))
            .catch(console.log)
    }

    onLogOutClick = () => {
        auth.signOut()
    }
    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        <div>
                            <button
                                onClick={this.onLogOutClick}
                            >
                                Log Out
                        </button>
                            <button>
                                {this.props.children}
                            </button>
                        </div>

                        :
                        <Forms
                            email={this.email}
                            password={this.password}
                            onEmailChange={this.onEmailChange}
                            onPasswordChange={this.onPasswordChange}
                            onLogInClick={this.onLogInClick}

                            onLogInByGoogleClick={this.onLogInByGoogleClick}
                        />
                }
            </div>
        )
    }
}

export default Auth
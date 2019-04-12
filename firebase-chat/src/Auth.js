import React from 'react'

import App from './App'

class Auth extends React.Component {
    state = {
        isUSerLoggedIn: false

    }
    render() {
        return (
            <Auth>
                <App />
            </Auth>

        )
    }
}


export default Auth
import React from 'react'

import Button from '@material-ui/core/Button'

const styles = {
    root: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    button: {


    }
}


class Auth extends React.Component {
    state = {
        isUSerLoggedIn: false

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
                      JFDDL7
                            <Button
                                variant={'contained'}
                                color={'secondary'}
                                style={styles.button}
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
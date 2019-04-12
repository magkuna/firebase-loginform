import React from 'react'
import { auth } from './firebaseConfig';

const Profile = (props) => {
    const user = auth.currentUser
    return(
        <div>
            <img
            src={user.photoURL}
            alt={user.displayName}
        />
        <div>
            {user.displayName}
        </div>
        <div>
            {user.email}
        </div>
    </div >
    )
}
export default Profile
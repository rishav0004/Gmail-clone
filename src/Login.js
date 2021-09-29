import React from 'react'
// import auth from 'registry-auth-token'
import {auth, provider} from './firebase';
import {Button} from '@material-ui/core'
import './login.css'
import { useDispatch } from 'react-redux';
import { login } from './features/mail/userSlice';

function Login() {

    const dispatch = useDispatch()

    const signin = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photourl: user.photoURL,
            }))
        })
    }

    return (
        <div className = "login">
            <div className="login__container">
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt =""/>
                <Button variant = "contained"   onClick = {signin} >Login</Button>

            </div>
        </div>
    )
}

export default Login

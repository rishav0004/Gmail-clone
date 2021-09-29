import React from 'react'
import ListIcon from '@material-ui/icons/List';
import { IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import './header.css'
import Avatar from '@material-ui/core/Avatar';
import { useSelector} from "react-redux"
import { selectUser} from './features/mail/userSlice'
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import {logout} from './features/mail/userSlice'

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }

    return (
        
        <div className = "header">
            <div className = "header__left">
                <IconButton>
                    <ListIcon fontSize = "large"/>
                 </IconButton> 
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt =""/>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input type="text" placeholder = "Search mail" />
                <IconButton>
                    <TuneIcon />
                </IconButton>
            </div>            
            <div className="header__right">
                <IconButton>
                    <HelpOutlineTwoToneIcon fontSize = "large" />
                </IconButton>
                <IconButton>
                    <SettingsIcon fontSize = "large" />
                </IconButton>
                <IconButton>
                    <AppsIcon fontSize = "large" />
                </IconButton>
                <IconButton>
                    <Avatar onClick = {signOut} src = {user.photoUrl} />
                </IconButton>
                
            </div>
            </div>
        
    )
}   

export default Header

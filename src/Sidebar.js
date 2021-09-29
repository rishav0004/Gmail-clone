/* eslint-disable */
import React from 'react'
import {Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
// import VideocamIcon from '@material-ui/icons/Videocam';
// import { IconButton} from "@material-ui/core"
// import KeyboardIcon from '@material-ui/icons/Keyboard';
// import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from 'react-redux'
import {openSendMessage} from './features/mail/mailSlice'

import './sidebar.css';

function Sidebar() {
    const dispatch = useDispatch()
    return (
        // eslint-disable-next-line
        <div className="sidebar">
            <Button onClick = {() => dispatch(openSendMessage())} className = "sidebar__compose" 
            startIcon = {<AddIcon fontSize = "large"/>}>Compose</Button>

            <SidebarOption icon = {<InboxIcon/>} title = "Inbox" number = {54} />
            <SidebarOption icon = {<StarIcon/>} title = "Starred" number = {101} />
            <SidebarOption icon = {<QueryBuilderIcon/>} title = "Snoozed" number = {54} />
            <SidebarOption icon = {<LabelImportantIcon/>} title = "Important" number = {54} />
            <SidebarOption icon = {<SendIcon/>} title = "Sent" number = {54} />
            <SidebarOption icon = {<FileCopyIcon/>} title = "Draft" number = {54} />
            <SidebarOption icon = {<LabelImportantRoundedIcon/>} title = "Categories" number = {54} />    
        </div>
        /* <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <VideocamIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardIcon/>
                </IconButton>  
                <IconButton>
                    <PhoneIcon/>
                </IconButton>  
            </div>            
        </div> 
        
    )
}*/
    )
}

export default Sidebar

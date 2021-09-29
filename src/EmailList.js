import React, { useState ,useEffect} from 'react'
import {Checkbox, IconButton} from "@material-ui/core"
import './emailist.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section'
import EmailRow from './EmailRow';
import {db} from './firebase'

function EmailList() {

    const [emails, setEmails] = useState([]);
  
    useEffect(() => {
        db.collection("emails")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot=>{
            
            setEmails(snapshot.docs.map(doc=> ({
                id:doc.id,
                data:doc.data()
            })))
        })
        
    },[])


    return (
        <div className ="emailList">
            <div className="emaillist__setting">
                <div className="emaillist__settingleft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RefreshIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emaillist__settingright">
                    <IconButton>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emaillist__section">
                <Section Icon = {<InboxIcon/>} title = "Primary" color ="red" selected/>
                <Section Icon = {<PeopleIcon/>} title = "Social" color ="#1a73e8" />
                <Section Icon = {<LocalOfferIcon/>} title = "Promotions" color ="#188038" />
            </div>

            <div className="emaillist__list">
                
                {emails.map(email => 
                    (
                    <EmailRow 
                        key={email.id}
                        id = {email.id}
                        title = {email.data.to} 
                        subject = {email.data.subject}
                        description = {email.data.message}
                        // time = {new Date(email.data.timestamp.seconds  * 1000).toUTCString()}
                        // time = {new Date( email.data.timestamp.seconds).toLocaleString()}
                    />
                    )
                )}                                            

                
            </div>
        </div>
    )
}

export default EmailList

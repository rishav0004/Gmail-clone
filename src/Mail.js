import React from 'react'
import './mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MoveToInboxSharpIcon from '@material-ui/icons/MoveToInboxSharp';
import LabelSharpIcon from '@material-ui/icons/LabelSharp';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import {IconButton} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import LocalPrintshopSharpIcon from '@material-ui/icons/LocalPrintshopSharp';
import LaunchSharpIcon from '@material-ui/icons/LaunchSharp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import {useSelector} from 'react-redux'
import {selectOpenMail} from './features/mail/mailSlice'


function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);


    return (
        <div className = "mail">
            <div className="mail__tools">
                <div className="mail__toolsleft">
                   <IconButton onClick = {()=>history.push('/')} >
                        <ArrowBackIcon  />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ReportIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <MarkunreadIcon/>
                    </IconButton>
                    <IconButton>
                        <AccessTimeIcon/>
                    </IconButton>
                    <IconButton>
                        <AssignmentTurnedInIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxSharpIcon/>
                    </IconButton>
                    <IconButton>
                        <LabelSharpIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertSharpIcon/>
                    </IconButton>

                </div>
                <div className="mail__toolsright">
                    <IconButton>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <div className="mail__headerbodyleft">
                        <h2 className = "subject__email" style = {{fontWeight: '600' } }>{selectedMail.subject}</h2>
                        <IconButton>
                            <LabelSharpIcon className = "mail__important" />    
                        </IconButton>
                    </div>
                    <div className="mail__headerbodyright">
                        <IconButton>
                            <LocalPrintshopSharpIcon/>
                        </IconButton>
                        <IconButton>
                            <LaunchSharpIcon/>
                        </IconButton>
                    </div>
                </div>
                <div className="message__upper">
                    <div className="message__upperleft">
                        <AccountCircleIcon className = "profile__img" style ={{fontSize:'50px'}} />
                        <h3 >{selectedMail.subject}</h3>
                        <p>{selectedMail.title}</p>
                    </div>
                    <div className="message__upperright">
                        <h3 style ={{paddingRight:'10px'}}>{selectedMail.time}</h3>
                        <IconButton>
                            <StarBorderIcon/>
                        </IconButton>
                        <IconButton>
                            <ReplyIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertSharpIcon/>
                        </IconButton>
                    </div>
                    
                </div>
                <div className="message__box">
                    <p style = {{marginLeft:'80px'}}>{selectedMail.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail

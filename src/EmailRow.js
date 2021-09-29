import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './emailrow.css'
import {useHistory} from 'react-router-dom';
import {selectMail} from './features/mail/mailSlice'
import {useDispatch} from 'react-redux'


function EmailRow({id, title, subject, description, time}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () =>{
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        })
        )
        history.push('/mail')
    }

    return (
        <div onClick = {openMail} className = "emailrow">
            
            <div className="emailrow__option">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
                
            </div>

            <h3 className="emailrow__title"> 
                {title}
            </h3>

            <div className="emailrow__message">
                <h3>{subject}{" -"}
                <span className="emailrow__decription">
                    {description}
                </span>
                </h3>
            </div>

            <p className="emailrow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow

import React from 'react'
import'./sendmail.css'
import CloseIcon from '@material-ui/icons/Close'
import {Button} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {closeSendMessage} from './features/mail/mailSlice'
import {db} from './firebase.js'
import firebase from 'firebase'


function SendMail() {

    const { register, handleSubmit, formState:{errors} } = useForm();
    const dispatch = useDispatch()


    const onSubmit = (data) => {
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        
        dispatch(closeSendMessage())
    }


    return (
        <div className="sendmail">
            <div className="sendmail__top">
            <h3>New Message</h3>
            <CloseIcon onClick = {()=> dispatch(closeSendMessage())} 
                className ="sendmail__close"  />
            {/* <IconButton onclick = {()=> dispatch(closeSendMessage())}>
                <CloseIcon  />
            </IconButton> */}
            </div>



            <div className="sendmail__middle">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        name ="to" 
                        {...register("to",{required:true})}
                        type="email" 
                        placeholder ="Recipient" />

                        {errors.to && 
                        <p 
                            className="sendmail__error" >
                            To is required
                        </p> 
                        }

                    <input 
                        name = "subject" 
                        type="text"  
                        {...register("subject",{required:true})}
                        // ref ={register({required:true})} 
                        placeholder = "Subject" />
                        
                        {errors.subject && 
                        <span 
                            className="sendmail__error" >
                            Subject is required
                        </span> 
                        }

                    <input 
                        name = "message" 
                        type="text" 
                        {...register("message",{required:true})}
                        // ref ={register({required:true})} 
                        placeholder ="Message" 
                        className ="message_compose_box"/>

                        {errors.message && 
                        <span 
                            className="sendmail__error" >
                            Message is required
                        </span> 
                        }

                    <div className="sendmail__bottom">
                        <Button type = "submit" >Send</Button>
                    </div> 
                </form>

            </div>
                    
        </div>
    )
}

export default SendMail

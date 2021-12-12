import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/formsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'




const Dialogs = (props) => {


  let state = props.dialogsPage

  let dialogElements = state.dialogs.map( (dialog) =>{
  return(
    <Dialog name={dialog.name} id={dialog.id} />
    )
}
  )

  let messageElements = props.dialogsPage.messages.map( (mess) => 
  <Message message={mess.message} id={mess.id} />
  )
  
  let addNewMessage = (value) => {
    props.addMessage(value.newMessageText)
  }


  if(!props.isAuth) return <Redirect to={"/login"} />



  return(

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {dialogElements}

      </div>
      <div className={s.messages}>
      {messageElements}
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component={Textarea} validate={[required, maxLength50]} name='newMessageText'placeholder='Enter your message'/>
  <button>Write</button>
  
</form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)


// class DialogsC extends React.Component {
//   componentDidMount() {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//       this.props.
//     })
//   }
// }

export default Dialogs
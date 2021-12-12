import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'



// const Dialog = (props) => {
//   let path = "/dailogs" + props.id
//   return (
//     <div className={s.dialog + ' ' + s.active}>
//       <NavLink to={path}>{props.name}</NavLink>
//     </div>
//   )
// }



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

  let newMessageElement = React.createRef()

  let addMessage = () => {
    props.addMessage()
  }
  
  let onMessageChange = () => {
    let text = newMessageElement.current.value
    // либо let text = newMessageElement.target.value
    props.updateNewMessageText(text)
  }

  return(

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {dialogElements}

        {/* <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} /> */}


        {/* <Dialog name='Alina' id='3' />
        
        <Dialog name='Petya' id='4'/>

        <Dialog name='Kirill' id='5' /> */}
      </div>
      <div className={s.messages}>
        <textarea
        onChange={onMessageChange}
        ref={newMessageElement}
        value={props.newMessageText}/>
        <button onClick={addMessage}>Write</button>
        {messageElements}

        {/* <Message message={messagesData[0].message} id={messagesData[0].id}  />

        <Message message={messagesData[1].message} id={messagesData[1].id} /> */}



        {/* <Message message={messagesData[2].message} id={messagesData[2].id} />

        <Message message={messagesData[3].message} id={messagesData[3].id} />

        <Message message={messagesData[4].message} id={messagesData[4].id} /> */}
      </div>
    </div>
  )
}

export default Dialogs
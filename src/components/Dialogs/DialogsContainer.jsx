import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'




let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText))
    }
  }
}



// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

//P.S две скобки ознаечает что в первых скобках мы вызываем нашу функцию connect, а во вторых функцию которую connect вернула

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  ) (Dialogs)
import {stopSubmit} from 'redux-form'
import { authApi } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default: 
      return state
  }
}

 export const getAuthMe = () => {
  return (dispatch) => { //Возращаем промис
      return authApi.me().then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data // Деструктуризация. Открываем через две дата потому что на сервере упаковано как data и axios упаковывает еще в одну дата, если что можно продебажить и узнать точно
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
             
    }
    // return 'Hello world'
  }

  // export const getAuthUser = (email, password, rememberMe) => {
  //   return (dispatch) => {
  //       authApi.login(email, password, rememberMe).then(response => {
  //       if (response.data.resultCode === 0) {
  //         let {userId} = response.data.data // Деструктуризация. Открываем через две дата потому что на сервере упаковано как data и axios упаковывает еще в одну дата, если что можно продебажить и узнать точно
  //         dispatch(setAuthUserData(userId))
  //       }
  //     })
               
  //     }
  //   }
  

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})


export const login = (email, password, rememberMe) => (dispatch) => {

  authApi.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthMe())
    }else{
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
     dispatch(stopSubmit("login", {_error: message}))
    }
  })
}
export const logout = () => (dispatch) => {
  authApi.logout().then(response => {
    if (response.data.resultCode === 0) {
      
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}

export default authReducer
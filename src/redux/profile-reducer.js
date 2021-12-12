import { profileApi, usersApi } from "../api/api";
const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  newPostText: '',
  posts: [
    {id: 1, message: 'Its my first post', likesCount: '55'},
    {id: 2, message: 'Hello gays, I am James', likesCount: '55'},
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  let stateCopy = {...state}
  stateCopy.posts = [...state.posts]

  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5, message: action.newPostText, likesCount: 0
      } 
      stateCopy.posts.push(newPost)
      // state.posts.push(newPost)
      stateCopy.newPostText = ''; //Обнуление формы из бизнеса
      return stateCopy
    }

    case SET_USERS_PROFILE: {
      return{...state, profile: action.profile}
    }
    case SET_STATUS: {
      return{...state, status: action.status}
    }
    //если тип не найдется то вернуть не измененный state
    default: 
      return state
  }

  // ДЕЛАЕМ ТОЖЕ САМОЕ ЧЕРЕЗ SWITCH ВЫШЕ ДЛЯ КРАТКОСТИ
  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 5, message: state.newPostText, likesCount: 0
  //   }
  //   state.posts.push(newPost)
  //   state.newPostText = ''; //Обнуление формы из бизнеса
  // }
  // else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   state.newPostText = action.newText;
  // }
}
export const  addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  }
}


export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})



export const getUserProfile = (userId) => {
  return (dispatch) => {
        usersApi.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data))
    })
    }
  }



export const getStatus = (userId) => {
  return (dispatch) => {
        profileApi.getStatus(userId).then(response => {
      dispatch(setStatus(response.data))
    })
    }
  }


  
export const updateStatus = (status) => {
  return (dispatch) => {
        profileApi.updateStatus(status).then(response => {
          if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
          }
    })
    }
  }

export default profileReducer
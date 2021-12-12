import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
  _state: {
    profilePage: {
      newPostText: '',
      posts: [
        {id: 1, message: 'Its my first post', likesCount: '55'},
        {id: 2, message: 'Hello gays, I am James', likesCount: '55'},
      ],
    },
   
    dialogsPage: {
      newMessageText: '',
      dialogs: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Petya'},
        {id: 5, name: 'Kirill'}
      ],
      messages: [
        {id: 1, message: 'Hello, people'},
        {id: 2, message: 'Hi, pussy'},
        {id: 3, message: 'Hi, baby'},
        {id: 4, message: 'Hi, body'},
        {id: 5, message: 'I am Bed, yes Bed))'}
      ]
    },

  },
  _rerenderEntireTree()  {
    console.log('State changed')
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer // Паттерн observer 
  },
  

  addPost() {
    let newPost = {
      id: 3, message: this._state.profilePage.newPostText, likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''; //Обнуление формы из бизнеса
    this._rerenderEntireTree(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 6, message: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = '';
    this._rerenderEntireTree(this._state)
  },
  updateNewMessageText(text) {
    this._state.dialogsPage.newMessageText = text
    this._rerenderEntireTree(this._state)
  },

  dispatch (action) {

    //reducers
    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)

    this._rerenderEntireTree(this._state)

    

  },
 
} 

export default store
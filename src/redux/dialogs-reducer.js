const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  // let stateCopy = {...state}
  // stateCopy.messages = [...state.messages]
  //Сокращенная  версия

  let stateCopy = {...state,
  messages: [...state.messages ]
  }

  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 1, message: action.newMessageText,
      }
      stateCopy.messages.push(newMessage)
      stateCopy.newMessageText = '';
      return stateCopy
    
    //если тип не найдется то вернуть не измененный state
    default: 
      return state
  }

  // ДЕЛАЕМ ТОЖЕ САМОЕ ЧЕРЕЗ SWITCH ВЫШЕ ДЛЯ КРАТКОСТИ
  // if (action.type === ADD_MESSAGE) {
  //   let newMessage = {
  //     id: 1, message: state.newMessageText,
  //   }
  //   state.messages.push(newMessage)
  //   state.newMessageText = '';
  // }

  // else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
  //   state.newMessageText = action.text
  // }
}
export const addMessageActionCreator = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText
  }
}

export default dialogsReducer
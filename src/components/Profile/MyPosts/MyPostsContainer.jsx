import React from 'react'
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"
import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


 
const oldMyPostsContainer = (props) => {
    
  return (
  <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState()

        let onAddPost = () => {
          // let text = newPostElement.current.value;
      
          store.dispatch(addPostActionCreator())
          // props.dispatch({type: 'ADD-POST'})
          // props.addPost()
      
          // newPostElement.current.value = ''
          // props.updateNewPostText(''); //Обнуление текста в форме, но оно лежит теперь в state
        }

        return (
        <MyPosts addPost={onAddPost} posts={store.getState().profilePage.posts} newPostText={store.getState().profilePage.newPostText}/>
        )
      }
    }
  
  </StoreContext.Consumer>
  )
}

//Создание контейнерной компоненты с помощью библиотеки react-redux

let mapStateToProps = (state) => {
  return {
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
 
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer

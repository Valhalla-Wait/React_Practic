import React from 'react'
import { reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/formsControls/FormsControls'


 
const MyPosts = (props) => {

  let postsElements = props.posts.map( (post) => {
    return(
    <Post message={post.message} likesCount={post.likesCount}/>
    )
  }
    ) 
    const maxLength10 = maxLengthCreator(10)

    const PostForm = (props) => {
      return <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="newPostText" validate={[required, maxLength10]}/><br />
      <button>Add post</button>
     </form>
    }
    
    let PostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(PostForm)

  let addPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
        <div className={s.postsBlock}>
          my_post
          <PostFormRedux onSubmit={addPost}/>
          <div  className={s.posts}>
           {postsElements}
          </div>
        </div>
  )
}



export default MyPosts

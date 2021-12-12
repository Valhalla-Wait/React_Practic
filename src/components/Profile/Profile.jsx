import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer 
        
        // store={props.store}

        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}

        // updateNewPostText={props.updateNewPostText}
        // addPost={props.addPost}
        />
      </div>
  )
}
export default Profile

import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
            <div  className={s.item}>
              <img src="https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj" />
              <span>{props.message}</span>
              <br />
              <span className={s.rait}>likes: {props.likesCount}</span>
            </div>
  )
}
export default Post

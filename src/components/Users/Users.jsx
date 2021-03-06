import React from "react"
import styles from './users.module.css'
import { NavLink } from 'react-router-dom'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return <div>
  <div>
    {pages.map(p => {
      
      return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {props.setPage(p)}}>{p}</span>
    })}
    
  </div>
  
  {
    props.users.map( u => <div key={u.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + u.id}>
          <img src={u.photos.small != null ? u.photos.small : 'https://cs6.pikabu.ru/avatars/576/v576012.jpg?1097843398 '} className={styles.userPhoto}/></NavLink>
        </div>
        <div>
          {u.followed
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{'u.location.city'}</div>
          <div>{'u.location.country'}</div>
        </span>
      </span>
    </div>
  )
  }
</div>
}

export default Users
import React from "react";
import styles from './users.module.css'
import * as axios from 'axios'

let Users = (props) => {
  let getUsers = () => {
    if(props.users.length === 0){
    
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
      })
  }
  

    // props.setUsers(
    //   [
    //     {id: 1, photoUrl: 'https://cs6.pikabu.ru/avatars/576/v576012.jpg?1097843398', followed: false, fullName: 'Misha', status: 'Im a frontend', location: {city: 'New York', country: 'USA'}},
    
    //     {id: 2, photoUrl: 'https://cs6.pikabu.ru/avatars/576/v576012.jpg?1097843398', followed: true, fullName: 'Artem', status: 'Im a backend', location: {city: 'Rome', country: 'Italy'}},
    
    //     {id: 3, photoUrl: 'https://cs6.pikabu.ru/avatars/576/v576012.jpg?1097843398', followed: false, fullName: 'Grisha', status: 'Im a fullstack', location: {city: 'Berlin', country: 'Germany'}}
        
    //   ]
    // )
  }
 debugger

  return <div>
    <button onClick={getUsers}>Get Users</button>
      {
        props.users.map( u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : 'https://cs6.pikabu.ru/avatars/576/v576012.jpg?1097843398 '} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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
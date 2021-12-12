import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {

  return (
    <header className={s.header}>
    <img src="https://pbs.twimg.com/media/CJ1V7QKUAAAD2p3.png" />
    <div className={s.loginBlock}>
      {props.isAuth ? <div>{props.login} <button onClick={props.logout}>LogOut</button></div> : <NavLink to={'/login'}>Login</NavLink>}
      
    </div>
  </header>
  )
}

export default Header
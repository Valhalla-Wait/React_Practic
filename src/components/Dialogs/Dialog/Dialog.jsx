import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'


const Dialog = (props) => {
  let path = "/dailogs" + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
export default Dialog
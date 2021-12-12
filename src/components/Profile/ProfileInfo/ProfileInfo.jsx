import React from 'react'
import Preloader from '../../common/Preloader/preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

  if (!props.profile) { //Profile изначально равен null, сервак не успеет дать ответ быстрее реакта и он выдаст ошибку про null, поэтому делаем прелоадер пока сервак дает ответ чтобы ошибка не возникала
    return <Preloader />
  }

  return (
    <div>
      
        {/* <div className={s.profile}>
          <img src="https://pxwall.com/wp-content/uploads/2019/04/4K-Desktop-Photo.jpg" />
        </div> */}
        <div className={s.desc_block}>
          <img src={props.profile.photos.large} alt="avatar" />
          
          <div>Ник: {props.profile.fullName}</div>
          
          <div>О себе: {props.profile.aboutMe}</div>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
          
        </div>
      </div>
  )
}
export default ProfileInfo
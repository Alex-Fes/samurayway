import React, { ChangeEvent } from 'react'

import defaultUserPhoto from '../../../assets/images/userPic.png'
import { Preloader } from '../../common/Preloader/Preloader'
import { RootUserProfileType } from '../RootUserProfileType'

import s from './ProfileInfo.module.css'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'

type ProfileInfoPropsType = {
  profile: RootUserProfileType
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photoFile: any) => void
  isOwner: boolean
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) props.savePhoto(e.target.files[0])
  }

  return (
    <div>
      <div>
        <div className={s.img}>
          {/*<img*/}
          {/*    src="https://www.imgfinancialgroup.com/sites/default/files/users/imgfinancialgroup/images/001-coastal.jpg"*/}
          {/*    alt=''/>*/}
        </div>

        <div className={s.descriptionBlock}>
          <img
            src={props.profile.photos.large || defaultUserPhoto}
            alt=""
            width={'200px'}
            height={'200px'}
          />
          {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          <span>About me: {props.profile.aboutMe}</span>
          <ul>
            Contacts:
            <li>{props.profile.contacts.facebook}</li>
            <li>{props.profile.contacts.github}</li>
            <li>{props.profile.contacts.vk}</li>
            <li>{props.profile.contacts.youtube}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

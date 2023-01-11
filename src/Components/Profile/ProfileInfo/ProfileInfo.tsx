import React, { ChangeEvent, useState } from 'react'

import defaultUserPhoto from '../../../assets/images/userPic.png'
import { updateUserDataTC } from '../../../Redux/profileReducer'
import { Preloader } from '../../common/Preloader/Preloader'
import { RootUserProfileType, RootUserProfileTypeContacts } from '../RootUserProfileType'

import { ProfileDataFormReduxForm, ProfileDataFormReduxFormType } from './ProfileDataForm'
import s from './ProfileInfo.module.css'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks'

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) props.savePhoto(e.target.files[0])
  }

  const onSubmit = (formData: ProfileDataFormReduxFormType) => {
    props.updateUserDataTC(formData)
    setEditMode(false)
  }

  return (
    <div>
      <div>
        <div className={s.img}></div>

        <div className={s.descriptionBlock}>
          <div>
            <img
              src={props.profile.photos.large || defaultUserPhoto}
              alt=""
              width={'200px'}
              height={'200px'}
            />
          </div>
          <div>{props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}</div>
          <div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          </div>

          {editMode ? (
            <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={props.profile} />
          ) : (
            <ProfileData
              profile={props.profile}
              isOwner={props.isOwner}
              goToEditMode={() => {
                setEditMode(!editMode)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }: ProfileDataPropsType) => {
  return (
    <div>
      <div>
        <h1>{profile.fullName}</h1>
      </div>
      <div>
        <b>Looking for a job </b> : {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b> : {profile.lookingForAJobDescription}
        </div>
      )}
      <span>About me: {profile.aboutMe}</span>
      <div>
        <b>Contacts :</b>
        <ul>
          {Object.keys(profile.contacts).map(key => {
            return (
              <li key={key}>
                <Contact
                  contactTitle={key}
                  contactValue={profile.contacts[key as keyof RootUserProfileTypeContacts]}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div>{isOwner && <button onClick={goToEditMode}>edit</button>}</div>
    </div>
  )
}

export const Contact = ({ contactTitle, contactValue }: ContactType) => {
  return (
    <div>
      <b>{contactTitle}</b> : {contactValue}
    </div>
  )
}

//TYPES =====================================

type ContactType = {
  contactTitle: string
  contactValue: string
}
export type ProfileDataFormPropsType = {
  initialValues: RootUserProfileType
  onSubmit?: (formData: ProfileDataFormReduxFormType) => void
}

export type ProfileDataPropsType = {
  profile: RootUserProfileType
  isOwner?: boolean
  goToEditMode?: () => void
  onSubmit?: (formData: ProfileDataFormReduxFormType) => void
}

type ProfileInfoPropsType = {
  profile: RootUserProfileType
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photoFile: any) => void
  isOwner: boolean
  updateUserDataTC: (formData: ProfileDataFormReduxFormType) => void
}

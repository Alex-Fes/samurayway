import React, { ChangeEvent, useState } from 'react'

import UploadFileIcon from '@mui/icons-material/UploadFile'
import { Paper } from '@mui/material'

import defaultUserPhoto from '../../../assets/images/userPic.png'
import { Preloader } from '../../../common/Preloader/Preloader'
import { RootUserProfileType } from '../RootUserProfileType'

import { ProfileData } from './ProfileData/ProfileData'
import {
  ProfileDataFormReduxForm,
  ProfileDataFormReduxFormType,
} from './ProfileDataForm/ProfileDataForm'
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
    <div className={s.container}>
      <div className={s.descriptionBlock}>
        <Paper elevation={3}>
          <div className={s.firstBlock}>
            <img src={props.profile.photos.large || defaultUserPhoto} alt="" />
            <UploadFileIcon fontSize="medium" className={s.uploadPhotoBtn} />
            <h2>
              {props.isOwner && (
                <input type={'file'} onChange={onMainPhotoSelected} style={{ display: 'none' }} />
              )}
            </h2>
            <div>
              <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
          </div>
        </Paper>
      </div>

      <div className={s.descriptionBlock}>
        <Paper elevation={3}>
          <div className={s.firstBlock}>
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
        </Paper>
      </div>
    </div>
  )
}

//TYPES =====================================

type ProfileInfoPropsType = {
  profile: RootUserProfileType
  status: string
  updateStatus: (status: string) => void
  savePhoto: (photoFile: any) => void
  isOwner: boolean
  updateUserDataTC: (formData: ProfileDataFormReduxFormType) => void
}

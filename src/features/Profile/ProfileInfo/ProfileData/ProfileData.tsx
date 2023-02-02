import React from 'react'

import EditIcon from '@mui/icons-material/Edit'
import { Divider } from '@mui/material'

import { RootUserProfileType, RootUserProfileTypeContacts } from '../../RootUserProfileType'
import { ProfileDataFormReduxFormType } from '../ProfileDataForm/ProfileDataForm'

import s from './ProfileData.module.scss'

export const ProfileData = ({ profile, isOwner, goToEditMode }: ProfileDataPropsType) => {
  const contacts = Object.keys(profile.contacts).map(contact => {
    const contactsValue = profile.contacts[contact as keyof RootUserProfileTypeContacts]

    if (contactsValue) {
      return <Contact key={contact} contactTitle={contact} contactValue={contactsValue} />
    }
  })

  return (
    <div className={s.mainContainer}>
      <div className={s.editBtn}>
        {isOwner && <EditIcon fontSize="small" onClick={goToEditMode} />}
      </div>
      <div>
        <h1>{profile.fullName}</h1>
      </div>
      <Divider textAlign="center">
        <h4>Looking for a job</h4>
      </Divider>
      <div>{profile.lookingForAJob ? 'yes' : 'no'}</div>

      <Divider textAlign="center">
        <h4>My skills</h4>
      </Divider>
      <div>{profile.lookingForAJobDescription}</div>
      <Divider textAlign="center">
        <h4>About me</h4>
      </Divider>
      <span> {profile.aboutMe}</span>
      <div>
        <Divider textAlign="center">
          <h4>Contacts</h4>
        </Divider>

        {contacts}
      </div>
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

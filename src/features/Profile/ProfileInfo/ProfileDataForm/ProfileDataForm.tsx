import React from 'react'

import { InjectedFormProps, reduxForm } from 'redux-form'

import { createField, Input, Textarea } from '../../../../common/FormsControls/FormsControl'
import { ProfileDataFormPropsType } from '../ProfileData/ProfileData'
import s from '../ProfileInfo.module.css'

export const ProfileDataForm: React.FC<
  InjectedFormProps<ProfileDataFormReduxFormType, ProfileDataFormPropsType> &
    ProfileDataFormPropsType
> = ({ initialValues, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>{createField('Full name', 'fullName', Input, [])}</div>
      <div>
        <b>Looking for a job:</b>
        {createField('', 'lookingForAJob', Input, [], { type: 'checkbox' })}
      </div>
      <div>
        <h3>My professional skills:</h3>
        {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}
      </div>
      <span>About me:</span>
      {createField('About me', 'aboutMe', Textarea, [])}
      <div>
        <h3>Contacts:</h3>

        {Object.keys(initialValues.contacts).map(key => {
          return (
            <li key={key} style={{ listStyleType: 'none' }}>
              <b>{key}</b>: {createField(key, 'contacts.' + key, Input, [])}
            </li>
          )
        })}
      </div>
      {error && <div className={s.formError}>{error}</div>}
      <div>
        <button>save</button>
      </div>
    </form>
  )
}

export const ProfileDataFormReduxForm = reduxForm<
  ProfileDataFormReduxFormType,
  ProfileDataFormPropsType
>({
  form: 'edit-profile',
})(ProfileDataForm)

//TYPES========================================

export type ProfileDataFormReduxFormType = {
  lookingForAJob: boolean
  aboutMe: string
  lookingForAJobDescription: string
  fullName: string
}

import React from 'react'

import { Field } from 'redux-form'
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field'

import { FieldValidatorType } from '../../../utilits/validators/validators'

import styles from './FormControls.module.css'

export const FormControl: React.FC<FormControlPropsType> = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = props => {
  const { input, meta, ...resProps } = props

  return (
    <FormControl {...props}>
      <textarea {...input} {...resProps} />
    </FormControl>
  )
}

export const Input: React.FC<WrappedFieldProps> = props => {
  const { input, meta, ...resProps } = props

  return (
    <FormControl {...props}>
      <input {...input} {...resProps} />
    </FormControl>
  )
}

export function createField<FormKeysType>(
  placeholder: string,
  name: FormKeysType,
  component: React.FC<WrappedFieldProps>,
  validators: Array<FieldValidatorType>,
  props?: any,
  text?: string
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />
      {text}
    </div>
  )
}

//TYPES================================
type FormControlPropsType = {
  meta: WrappedFieldMetaProps
  children: React.ReactNode
}

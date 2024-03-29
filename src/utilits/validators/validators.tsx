import React from 'react'

export const required: FieldValidatorType = value => (value ? undefined : 'Field is required')

export const maxLengthCreator =
  (maxLength: number): FieldValidatorType =>
  value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined
  }

//TYPES=============================
export type FieldValidatorType = (value: string) => string | undefined

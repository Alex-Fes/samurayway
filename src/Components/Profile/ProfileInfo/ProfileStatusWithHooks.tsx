import React, { ChangeEvent, useEffect, useState } from 'react'

type ProfileInfoPropsType = {
  status: string
  updateStatus: (status: string) => void
}
// type LocalStateType = {
//   editMode: boolean
//   status: string
// }

export const ProfileStatusWithHooks = (props: ProfileInfoPropsType) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const SetActivateMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={SetActivateMode}>
            <b>{props.status || '-----'}</b>{' '}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  )
}

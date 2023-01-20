import { Dispatch } from 'redux'

import { getAuthUserDataTC } from '../features/auth/authReducer'
import { AppActionsType } from '../Redux/types'

import { AppThunkType } from './store'

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'
const SET_APP_STATUS = 'app/SET-STATUS'

let initialState: InitialStateType = {
  initialized: false,
  status: 'idle',
}

export const appReducer = (
  state: InitialStateType = initialState,
  action: AppActionsType
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    case SET_APP_STATUS:
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}
export const initializedSuccessAC = () => ({ type: INITIALIZED_SUCCESS } as const)

export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: SET_APP_STATUS, status } as const)

export const initializeAppTC = (): AppThunkType => {
  return (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    dispatch(getAuthUserDataTC()).then(() => {
      dispatch(initializedSuccessAC())
      dispatch(setAppStatusAC('succeeded'))
    })
  }
}

//Types
export type InitialStateType = {
  initialized: boolean
  status: RequestStatusType
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

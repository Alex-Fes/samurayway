import { Dispatch } from 'redux'
import { stopSubmit } from 'redux-form'

import { authAPI, securityAPI } from '../api/api'

import { AppThunkType } from './redux-store'
import { ActionTypes } from './state'

const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS'

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }
    default:
      return state
  }
}

//ACTIONS ======================================
export const setAuthUserDataAC = (userId: number, email: string, login: string, isAuth: boolean) =>
  ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } } as const)
export const getCaptchaUrlAC = (captchaUrl: string) =>
  ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl } as const)

//THUNKS =======================================

export const getAuthUserDataTC: any = () => async (dispatch: Dispatch) => {
  try {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data

      dispatch(setAuthUserDataAC(id, email, login, true))
    }
  } catch (err) {
    console.log(err)
  }
}

export const loginUserTC =
  (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType =>
  async dispatch => {
    try {
      let response = await authAPI.login(email, password, rememberMe, captcha)

      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrlTC())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'

        dispatch(stopSubmit('login', { _error: message }))
      }
    } catch (err) {
      console.log(err)
    }
  }

export const logoutUserTC = (): AppThunkType => async dispatch => {
  try {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(0, '', '', false))
    }
  } catch (err) {
    console.log(err)
  }
}

export const getCaptchaUrlTC = (): AppThunkType => async dispatch => {
  try {
    const response = await securityAPI.getCaptchaUrl()

    dispatch(getCaptchaUrlAC(response.data.url))
  } catch (err) {
    console.log(err)
  }
}

//TYPES ========================================
export type InitialStateType = {
  userId: number
  email: string
  login: string
  isAuth: boolean
  captchaUrl: string | null
}

let initialState: InitialStateType = {
  userId: 0,
  email: '',
  login: '',
  isAuth: false,
  captchaUrl: null,
}

import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { loginUserTC } from '../../Redux/authReducer'
import { StoreType } from '../../Redux/redux-store'
import { maxLengthCreator, required } from '../../utilits/validators/validators'
import styles from '../common/FormsControls/FormControls.module.css'
import { createField, Input } from '../common/FormsControls/FormsControl'

const maxLengthForLogin = maxLengthCreator(50)
const maxLengthForPassword = maxLengthCreator(20)

export const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginReduxFormProsType> & LoginReduxFormProsType
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>('email', 'email', Input, [required, maxLengthForLogin])}
      {createField<LoginFormValuesTypeKeys>(
        'Password',
        'password',
        Input,
        [required, maxLengthForPassword],
        {
          type: 'password',
        }
      )}
      {createField<LoginFormValuesTypeKeys>(
        'checkbox',
        'rememberMe',
        Input,
        [],
        { type: 'checkbox' },
        'remember me'
      )}
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl &&
        createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', Input, [required])}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginReduxFormProsType>({ form: 'login' })(
  LoginForm
)

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
})
const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.loginUserTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

export default connect(mapStateToProps, { loginUserTC })(Login)

//TYPES =========================

type LoginReduxFormProsType = {
  captchaUrl: string | null
  onSubmit: (formData: LoginFormValuesType) => void
}

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = keyof LoginFormValuesType

type MapDispatchToPropsType = {
  loginUserTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type MapStateToPropsType = {
  captchaUrl: null | string
  isAuth: boolean
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

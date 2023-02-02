import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { StoreType } from '../../App/store'
import styles from '../../Components/common/FormsControls/FormControls.module.scss'
import { createField, Input } from '../../Components/common/FormsControls/FormsControl'
import { maxLengthCreator, required } from '../../utilits/validators/validators'

import { loginUserTC } from './authReducer'
import s from './Login.module.scss'
const maxLengthForLogin = maxLengthCreator(50)
const maxLengthForPassword = maxLengthCreator(20)

export const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginReduxFormProsType> & LoginReduxFormProsType
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField<LoginFormValuesTypeKeys>('email', 'email', Input, [
          required,
          maxLengthForLogin,
        ])}
      </div>
      <div>
        {createField<LoginFormValuesTypeKeys>(
          'Password',
          'password',
          Input,
          [required, maxLengthForPassword],
          {
            type: 'password',
          }
        )}
      </div>
      <div>
        {createField<LoginFormValuesTypeKeys>(
          'checkbox',
          'rememberMe',
          Input,
          [],
          { type: 'checkbox' },
          'remember me'
        )}
      </div>
      <div>{captchaUrl && <img src={captchaUrl} alt="captcha" />}</div>
      <div>
        {captchaUrl &&
          createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', Input, [required])}
      </div>
      <div>{error && <div className={styles.formSummaryError}>{error}</div>}</div>

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
    <div className={s.container}>
      <div className={s.loginContainer}>
        <div className={s.descriptionBox}>
          <div className={s.descriptionTitle}>
            <img src="../../assets/images/logo.png" alt="logo" />
            <h2>Samurai Way</h2>
          </div>
          <div className={s.description}>
            <span>
              To log in get registered{' '}
              <a href="https://social-network.samuraijs.com/signUp">here</a>
            </span>
            <span>or use common test account credentials:</span>
            <span>
              Email: <b>free@samuraijs.com</b>
            </span>
            <span>
              Password: <b>free</b>
            </span>
          </div>
        </div>
        <div className={s.loginBox}>
          <h3>Sign in</h3>
          <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
      </div>
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

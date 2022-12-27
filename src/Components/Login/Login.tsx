import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUserTC} from "../../Redux/authReducer";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControl";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../Redux/redux-store";
import styles from '../common/FormsControls/FormControls.module.css'


const maxLengthForLogin = maxLengthCreator(50)
const maxLengthForPassword = maxLengthCreator(20)
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (<form onSubmit={handleSubmit}>

        {createField('email', 'email', Input, [required, maxLengthForLogin])}
        {createField('Password', 'password', Input, [required, maxLengthForPassword], {type: 'password'})}
        {createField('checkbox', 'remember me', Input, [], {type: 'checkbox'}, 'remember me')}
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
type MapDispatchToPropsType = {
    loginUserTC: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const mapStateToProps = (state: StoreType): MapStateToPropsType => ({isAuth: state.auth.isAuth})
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginUserTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default connect(mapStateToProps, {loginUserTC})(Login)




















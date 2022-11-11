import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUserTC} from "../../Redux/authReducer";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {Input} from "../common/FormsControls/FormsControl";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../Redux/redux-store";


const maxLengthForLogin = maxLengthCreator(50)
const maxLengthForPassword = maxLengthCreator(20)
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'email'}
                   name={'email'}
                   component={Input}
                   validate={[required, maxLengthForLogin]}
            />
        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   type={"password"}
                   component={Input}
                   validate={[required, maxLengthForPassword]}
            />
        </div>
        <div>
            <Field type={'checkbox'}
                   name={'remember me'}
                   component={Input}
            /> remember me
        </div>
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
        props.loginUserTC(formData.email, formData.password, formData.rememberMe )
    }
    if( props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default connect(mapStateToProps, {loginUserTC})(Login)




















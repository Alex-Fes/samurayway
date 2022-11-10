import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUserTC} from "../../Redux/authReducer";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {Input} from "../common/FormsControls/FormsControl";




export type loginFormPropsType = {
    login: string | number
    password: string | number
    checkbox?: boolean
}
const maxLengthForLogin =  maxLengthCreator(50)
const maxLengthForPassword =  maxLengthCreator(20)
export const LoginForm: React.FC<InjectedFormProps<FormDataType> > = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'}
                   name={'login'}
                   component={Input}
                   validate={[required,maxLengthForLogin]}
            />
        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   component={Input}
                   validate={[required, maxLengthForPassword]}
            />
        </div>
        <div>
            <Field type={'checkbox'}
                   name={'remember me'}
                   component={Input}
                   validate={[required ]}
            /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm<FormDataType >({
    form: 'login'
})(LoginForm)


let MapStateToProps = () => {

}
let MapDispatchToProps =() => {

}
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)

        loginUserTC(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
//export default compose<React.ComponentType>(connect(getAuthUserDataTC), withAuthRedirect)(Login)
//export default compose<React.ComponentType>(connect(loginUserTC), withAuthRedirect)(Login)
connect(loginUserTC)(Login)




















import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getAuthUserDataTC, loginUserTC} from "../../Redux/authReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'remember me'} component={'input'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const LoginReduxForm = reduxForm<FormDataType>({
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




















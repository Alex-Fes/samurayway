import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/authReducer";
import {StoreType} from "../../Redux/redux-store";

type mapStateToPropsType = {
    login: string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setAuthUserDataAC: (userId: number, email: string, login: string) => void
}
type HeaderAPIComponentType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderAPIComponentType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserDataAC(id, email, login)
            }
        })
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }

}

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);
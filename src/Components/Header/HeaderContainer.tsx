import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "../../Redux/authReducer";
import {StoreType} from "../../Redux/redux-store";

type mapStateToPropsType = {
    login: string
    isAuth: boolean
    // id: number
    // email: string
}
type mapDispatchToPropsType = {
    getAuthUserDataTC: () => void
    //authUserData: (userId: number, email: string, login: string) => void
}
type HeaderAPIComponentType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderAPIComponentType> {
    componentDidMount() {
        // this.props.authUserData(this.props.id, this.props.email, this.props.login)
        this.props.getAuthUserDataTC()
        // authAPI.me().then(response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, email, login} = response.data.data;
        //         this.props.setAuthUserDataAC(id, email, login)
        //     }
        // })
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
    login: state.auth.login,
    // id: state.auth.userId,
    // email: state.auth.email
})

export default connect(mapStateToProps,
    {
        getAuthUserDataTC
        //  authUserData: authUserDataTC
    })(HeaderContainer);
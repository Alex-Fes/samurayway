import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/profileReducer";
import {RootUserProfileType} from "./RootUserProfileType";


type MapStateToPropsType = {
    profile: RootUserProfileType
    // props: any
}
type MapDispatchToProps = {
    setUserProfile: (profile: RootUserProfileType) => void
}
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
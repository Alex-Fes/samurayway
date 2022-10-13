import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/profileReducer";
import {RootUserProfileType} from "./RootUserProfileType";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type PathParamType = {
    userId: string
}
type MapStateToPropsType = {
    profile: RootUserProfileType
    // props: any
}
type MapDispatchToProps = {
    setUserProfile: (profile: RootUserProfileType) => void
}
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamType>;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }

        usersAPI.authMe(userId).then(data => {
            this.props.setUserProfile(data)
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
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
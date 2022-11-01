import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    status: string
}
class ProfileStatus extends React.Component<ProfileInfoPropsType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {

        console.log('this: ', this)
        this.setState({
            editMode: true})}
    deActivateEditMode = () => {
        this.setState({
            editMode: false})}
    render() {
        if (!this.props.status) {
            return <Preloader/>}
        return (<div>
            {!this.state.editMode &&
                <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>}
            {this.state.editMode &&
                <div><input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/></div>}
        </div>)
    }
}

export default ProfileStatus;







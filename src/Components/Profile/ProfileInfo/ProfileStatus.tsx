import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileInfoPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        console.log('this: ', this)
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:React.FormEvent<HTMLInputElement>) => {
         this.setState({
             status: e.currentTarget.value
         })
    }
    render() {
        if (!this.props.status) {
            return <Preloader/>
        }
        return (<div>
            {!this.state.editMode &&
                <div><span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span></div>}
            {this.state.editMode &&
                <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                            value={this.state.status}/></div>}
        </div>)
    }
}

export default ProfileStatus;







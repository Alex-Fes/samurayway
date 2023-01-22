import React, { Component } from 'react'

import { connect } from 'react-redux'

import { StoreType } from '../../App/store'
import { logoutUserTC } from '../../features/auth/authReducer'

import Header from './Header'

type mapStateToPropsType = {
  login: string
  isAuth: boolean
}
type mapDispatchToPropsType = {
  // getAuthUserDataTC: () => void
  logoutUserTC: () => void
}
type HeaderAPIComponentType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends Component<HeaderAPIComponentType> {
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { logoutUserTC })(HeaderContainer)

import React from 'react'

import { connect } from 'react-redux'

import { logoutUserTC } from '../../Redux/authReducer'
import { StoreType } from '../../Redux/redux-store'

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
class HeaderContainer extends React.Component<HeaderAPIComponentType> {
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { logoutUserTC })(HeaderContainer)

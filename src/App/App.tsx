import React, { Component } from 'react'

import { CircularProgress, Container } from '@mui/material'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import './App.css'
import HeaderContainer from '../Components/Header/HeaderContainer'
import { AppRoutes } from '../features/AppRoutes/AppRoutes'

import { initializeAppTC, RequestStatusType } from './appReducer'
import { StoreType } from './store'

class App extends Component<AppPropsType> {
  catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
    alert('Some error occurred')
    console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeAppTC()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    // if (!this.props.initialized) {
    //   return (
    //     <div className="app-wrapper-initial-progress">
    //       <div className="app-initial-progress">
    //         <CircularProgress size="50px" className="circularProgress" />
    //       </div>
    //     </div>
    //   )
    // }
    // if (!this.props.isLoggedIn) {
    //   return <Redirect to={'/login'} />
    // }

    return (
      <div className="app-wrapper">
        {/*{this.props.appStatus === 'loading' && (*/}
        {/*  <LinearProgress sx={{ position: 'absolute', width: '100%', height: '5px', top: '0' }} />*/}
        {/*)}*/}
        <div className="main">
          {this.props.isLoggedIn && <HeaderContainer />}
          <Container sx={{ pt: 4, position: 'relative', height: '100%' }}>
            <AppRoutes />
          </Container>
        </div>
        {/*<div className="footer">*/}
        {/*  <Footer />*/}
        {/*</div>*/}
      </div>
    )
  }
}

const mapStateToProps = (state: StoreType) => ({
  initialized: state.app.initialized,
  appStatus: state.app.status,
  isLoggedIn: state.auth.isAuth,
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeAppTC })
)(App)

//Types
type mapDispatchToPropsType = {
  initializeAppTC: () => void
}
type mapStateToPropsType = {
  initialized: boolean
  appStatus: RequestStatusType
  isLoggedIn: boolean
}
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

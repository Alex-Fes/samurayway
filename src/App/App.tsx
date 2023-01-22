import React, { Component } from 'react'

import { CircularProgress, Container, LinearProgress } from '@mui/material'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import './App.css'
import { AppRoutes } from '../Components/AppRoutes/AppRoutes'
import Footer from '../Components/Footer/Footer'
import HeaderContainer from '../Components/Header/HeaderContainer'

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
    if (!this.props.initialized) {
      return (
        <div className="app-wrapper-initial-progress">
          <div className="app-initial-progress">
            <CircularProgress size="50px" className="circularProgress" />
          </div>
        </div>
      )
    }

    return (
      <div className="app-wrapper">
        {this.props.appStatus === 'loading' && (
          <LinearProgress sx={{ position: 'absolute', width: '100%', height: '5px', top: '0' }} />
        )}
        <HeaderContainer />
        <Container sx={{ pt: 4 }}>
          <AppRoutes />
        </Container>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state: StoreType) => ({
  initialized: state.app.initialized,
  appStatus: state.app.status,
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
}
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

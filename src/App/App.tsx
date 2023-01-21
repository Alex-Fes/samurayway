import React, { Component, lazy, Suspense } from 'react'

import { CircularProgress, LinearProgress } from '@mui/material'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import './App.css'
import DialogsContainer from '../Components/Dialogs/DialogsContainer'
import Footer from '../Components/Footer/Footer'
import HeaderContainer from '../Components/Header/HeaderContainer'
import Navigation from '../Components/Navigation/Navigation'
import ProfileContainer from '../Components/Profile/ProfileContainer'
import UsersContainer from '../Components/Users/UsersContainer'
import Login from '../features/auth/Login'

import { initializeAppTC, RequestStatusType } from './appReducer'
import { StoreType } from './store'

const Music = lazy(() => import('../Components/Music/Music'))
const News = lazy(() => import('../Components/News/News'))
const Settings = lazy(() => import('../Components/Settings/Settings'))
const Sidebar = lazy(() => import('../Components/Sidebar/Sidebar'))

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
        <div>
          <HeaderContainer />
        </div>

        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}></Route>
          <Route path="/dialogs" render={() => <DialogsContainer />}></Route>
          <Suspense
            fallback={
              <div>
                <CircularProgress size="50px" className="circularProgress" />
              </div>
            }
          >
            <Route path="/news" render={() => <News />}></Route>
            <Route path="/music" render={() => <Music />}></Route>{' '}
            <Route path="/settings" render={() => <Settings />}></Route>
            <Route path="/sidebar" render={() => <Sidebar />}></Route>
          </Suspense>
          <Route path="/users" render={() => <UsersContainer />}></Route>
          <Route path="/login" render={() => <Login />}></Route>
        </div>
        <div className="footer">
          <Route render={() => <Footer />}></Route>
        </div>
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

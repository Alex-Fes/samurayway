import React from 'react'

import './App.css'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { Preloader } from './Components/common/Preloader/Preloader'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import Footer from './Components/Footer/Footer'
import HeaderContainer from './Components/Header/HeaderContainer'
import Login from './Components/Login/Login'
import Music from './Components/Music/Music'
import Navigation from './Components/Navigation/Navigation'
import News from './Components/News/News'
import ProfileContainer from './Components/Profile/ProfileContainer'
import Settings from './Components/Settings/Settings'
import Sidebar from './Components/Sidebar/Sidebar'
import UsersContainer from './Components/Users/UsersContainer'
import { initializeAppTC } from './Redux/appReducer'
import { StoreType } from './Redux/redux-store'

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeAppTC()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation />

        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}></Route>
          <Route path="/dialogs" render={() => <DialogsContainer />}></Route>
          <Route path="/news" render={() => <News />}></Route>
          <Route path="/music" render={() => <Music />}></Route>
          <Route path="/users" render={() => <UsersContainer />}></Route>
          <Route path="/settings" render={() => <Settings />}></Route>
          <Route path="/sidebar" render={() => <Sidebar />}></Route>
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
}
type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

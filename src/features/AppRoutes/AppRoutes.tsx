import React, { lazy, Suspense } from 'react'

import { CircularProgress } from '@mui/material'
import { Route } from 'react-router-dom'

import Login from '../auth/Login'
import DialogsContainer from '../Dialogs/DialogsContainer'
import { HomePage } from '../HomePage/HomePage'
import ProfileContainer from '../Profile/ProfileContainer'
import UsersContainer from '../Users/UsersContainer'

const News = lazy(() => import('../News/News'))
const Settings = lazy(() => import('../Settings/Settings'))
const Sidebar = lazy(() => import('../Sidebar/Sidebar'))

export const AppRoutes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <HomePage />}></Route>
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
        <Route path="/settings" render={() => <Settings />}></Route>
        <Route path="/sidebar" render={() => <Sidebar />}></Route>
      </Suspense>
      <Route path="/users" render={() => <UsersContainer />}></Route>
      <Route path="/login" render={() => <Login />}></Route>
    </div>
  )
}

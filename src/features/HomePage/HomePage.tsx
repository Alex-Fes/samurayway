import React from 'react'

import { Grid } from '@mui/material'

import News from '../News/News'
import MyPostsContainer from '../Profile/MyPosts/MyPostsContainer'
import ProfileContainer from '../Profile/ProfileContainer'
import Sidebar from '../Sidebar/Sidebar'

import s from './HomePage.module.scss'
export const HomePage = () => {
  return (
    <div className={s.mainContainer}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ProfileContainer />
        </Grid>
        <Grid item xs={6}>
          <MyPostsContainer />
        </Grid>
        <Grid item xs={3} spacing={2}>
          <Sidebar />

          <News />
        </Grid>
      </Grid>
    </div>
  )
}

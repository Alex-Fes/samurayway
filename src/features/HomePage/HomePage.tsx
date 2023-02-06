import React from 'react'

import { Grid, Paper } from '@mui/material'

import { SvgSelector } from '../../common/svgSelector/SvgSelector'
import MyPostsContainer from '../Profile/MyPosts/MyPostsContainer'
import ProfileContainer from '../Profile/ProfileContainer'

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
          <Paper elevation={3} sx={{ width: '100%', height: '300px', marginBottom: '20px' }}>
            <div className={s.friendsContainer}>
              <h3>My friends</h3>
              <SvgSelector svgname={'underDevelopment'} />
              <p>This page is under development.</p>
            </div>
            {/*<Sidebar />*/}
          </Paper>

          <Paper elevation={3} sx={{ width: '100%', height: '300px' }}>
            <div className={s.newsContainer}>
              <h3>News</h3>
              <SvgSelector svgname={'underDevelopment'} />
              <p>This page is under development.</p>
              {/*<News />*/}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

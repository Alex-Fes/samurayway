import React from 'react'

import { SvgSelector } from '../../common/svgSelector/SvgSelector'

import s from './News.module.scss'

const News = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.newsContainer}>
        {/*<Paper elevation={3} sx={{ width: '100%', height: '300px', marginTop: '20px' }}>*/}
        {/*  News*/}
        {/*</Paper>*/}
        <SvgSelector svgname={'underDevelopment'} />
        <div>This page is under development.</div>
      </div>
    </div>
  )
}

export default News

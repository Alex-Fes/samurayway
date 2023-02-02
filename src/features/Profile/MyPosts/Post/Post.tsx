import React, { useState } from 'react'

import { FavoriteBorder } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'

import EditPostMenu from './EditPostMenu'
import s from './Post.module.css'

type MessagePropsType = {
  message: string
  likeCount: number
  smallAva: string
  fullName: string
  view: number
}

const Post = (props: MessagePropsType) => {
  const [value, setValue] = useState(props.likeCount)
  const [touched, setTouched] = useState(false)

  return (
    <div className={s.posts}>
      <div className={s.post}>
        <div className={s.postHead}>
          <img src={props.smallAva} alt="Avatar" />
          <h3>{props.fullName}</h3>
        </div>
        <div className={s.editMenu}>
          <EditPostMenu />
        </div>
        <div className={s.message}>{props.message}</div>
        <div className={s.postFooter}>
          <Box sx={{ width: '100%' }}>
            <BottomNavigation showLabels>
              <BottomNavigationAction
                onClick={() => {
                  if (!touched) {
                    setValue(value => value + 1)
                    setTouched(true)
                  } else {
                    setValue(value => value - 1)
                    setTouched(false)
                  }
                }}
                label={value}
                icon={!touched ? <FavoriteBorder /> : <FavoriteIcon />}
              />
              <BottomNavigationAction icon={<ShareOutlinedIcon />} />
              <BottomNavigationAction label={props.view} icon={<VisibilityOutlinedIcon />} />
            </BottomNavigation>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Post

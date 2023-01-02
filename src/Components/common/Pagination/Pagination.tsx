import React from 'react'

import styles from './Pagination.module.css'

export const Pagination = (props: PaginationPropsType) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize) // округление в большую сторону
  // let pages = [];
  // for(let i = 1; i <= pagesCount; i++) {
  //     pages.push(i)
  // }
  let pages = [1, props.currentPage - 1, props.currentPage, props.currentPage + 1, pagesCount]

  if (props.currentPage < 4) {
    pages = [1, 2, 3, 4, pagesCount]
  }
  if (props.currentPage > pagesCount - 2) {
    pages = [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
  }

  return (
    <div>
      {pages.map((el, index) => {
        return (
          <span
            onClick={() => props.onPageChanged(el)}
            className={props.currentPage === el ? styles.selectPage : '  '}
            key={index}
          >
            {el === pagesCount && props.currentPage < pagesCount - 2 && ' ... '}
            {el}
            {el === 1 && props.currentPage > 3 && ' ... '}
          </span>
        )
      })}
    </div>
  )
}

type PaginationPropsType = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalUserCount: number
  pageSize: number
}

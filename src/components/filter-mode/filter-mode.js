import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames/bind'

import { selectMode, switchMode } from './filter-mode-slice'
import classes from './filter-mode.module.scss'

export default function FilterHeader() {
  const dispatch = useDispatch()
  const activeClass = classNames.bind(classes)
  const classNameToggleCheap = activeClass('filterHeader__button', {
    'filterHeader__button--active': useSelector(selectMode) === 'cheap',
  })
  const classNameToggleFaster = activeClass('filterHeader__button', {
    'filterHeader__button--active': useSelector(selectMode) === 'fastest',
  })
  return (
    <div className={classes.filterHeader}>
      <form className={classes.filterHeader__form}>
        <button className={classNameToggleCheap} type="button" onClick={() => dispatch(switchMode('cheap'))}>
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </form>
      <form className={classes.filterHeader__form}>
        <button className={classNameToggleFaster} type="button" onClick={() => dispatch(switchMode('fastest'))}>
          САМЫЙ БЫСТРЫЙ
        </button>
      </form>
    </div>
  )
}

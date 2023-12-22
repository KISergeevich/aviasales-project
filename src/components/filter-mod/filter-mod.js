import React from 'react'

import classes from './filter-mod.module.scss'

export default function FilterHeader() {
  return (
    <div className={classes.filterHeader}>
      <form className={classes.filterHeader__form}>
        <button className={classes.filterHeader__button} type="button">
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </form>
      <form className={classes.filterHeader__form}>
        <button className={classes.filterHeader__button} type="button">
          САМЫЙ БЫСТРЫЙ
        </button>
      </form>
    </div>
  )
}

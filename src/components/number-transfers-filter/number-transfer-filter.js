import React from 'react'

import classes from './number-transfers-filter.module.scss'

export default function NumberTransferFilter() {
  return (
    <div className={classes.numberOfTransfers}>
      <span className={classes.numberOfTransfers__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={classes.numberOfTransfers__label} htmlFor="all">
        <input className={classes.numberOfTransfers__input} type="checkbox" id="all" name="all" />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>Все</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="without">
        <input className={classes.numberOfTransfers__input} type="checkbox" id="without" name="without" />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>Без пересадок</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="oneTransfer">
        <input className={classes.numberOfTransfers__input} type="checkbox" id="oneTransfer" name="oneTransfer" />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>1 пересадка</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="twoTransfer">
        <input className={classes.numberOfTransfers__input} type="checkbox" id="twoTransfer" name="twoTransfer" />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>2 пересадки</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="threeTransfer">
        <input className={classes.numberOfTransfers__input} type="checkbox" id="threeTransfer" name="threeTransfer" />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>3 пересадки</span>
      </label>
    </div>
  )
}

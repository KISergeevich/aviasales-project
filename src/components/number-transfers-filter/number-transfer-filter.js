import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectTransferAll,
  selectTransferNone,
  selectTransferOne,
  selectTransferThree,
  selectTransferTwo,
  transferAll,
  transferNone,
  transferOne,
  transferThree,
  transferTwo,
} from '../../redux/filters-transfer-slice'

import classes from './number-transfers-filter.module.scss'

export default function NumberTransferFilter() {
  const dispatch = useDispatch()
  return (
    <div className={classes.numberOfTransfers}>
      <span className={classes.numberOfTransfers__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={classes.numberOfTransfers__label} htmlFor="all">
        <input
          className={classes.numberOfTransfers__input}
          type="checkbox"
          id="all"
          name="all"
          checked={useSelector(selectTransferAll)}
          onChange={(e) => dispatch(transferAll(e.target.checked))}
        />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>Все</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="without">
        <input
          className={classes.numberOfTransfers__input}
          type="checkbox"
          id="without"
          name="without"
          checked={useSelector(selectTransferNone)}
          onChange={(e) => dispatch(transferNone(e.target.checked))}
        />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>Без пересадок</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="oneTransfer">
        <input
          className={classes.numberOfTransfers__input}
          type="checkbox"
          id="oneTransfer"
          name="oneTransfer"
          checked={useSelector(selectTransferOne)}
          onChange={(e) => dispatch(transferOne(e.target.checked))}
        />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>1 пересадка</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="twoTransfer">
        <input
          className={classes.numberOfTransfers__input}
          type="checkbox"
          id="twoTransfer"
          name="twoTransfer"
          checked={useSelector(selectTransferTwo)}
          onChange={(e) => dispatch(transferTwo(e.target.checked))}
        />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>2 пересадки</span>
      </label>
      <label className={classes.numberOfTransfers__label} htmlFor="threeTransfer">
        <input
          className={classes.numberOfTransfers__input}
          type="checkbox"
          id="threeTransfer"
          name="threeTransfer"
          checked={useSelector(selectTransferThree)}
          onChange={(e) => dispatch(transferThree(e.target.checked))}
        />
        <span className={classes.numberOfTransfers__chekbox} />
        <span className={classes.numberOfTransfers__text}>3 пересадки</span>
      </label>
    </div>
  )
}

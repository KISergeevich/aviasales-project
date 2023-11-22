import React from 'react'

import s7 from '../../assets/img/s7.png'

import classes from './ticket-list.module.scss'

export default function TicketList() {
  return (
    <div className={classes['ticket-list']}>
      <div className={classes.ticket}>
        <div className={classes.ticket__header}>
          <div className={classes.ticket__price}>13 400 P</div>
          <img src={s7} alt="s7" className={classes.ticket__logo} />
        </div>
        <div className={classes.ticket__body}>
          <div className={classes.ticket__info}>
            <div className={classes['ticket__from-to-block']}>
              <div className={classes['ticket__from-to-header']}>MOW - HKT</div>
              <div className={classes['ticket__from-to-info']}>10:45 - 08:00</div>
            </div>
            <div className={classes['ticket__time-road-block']}>
              <div className={classes['ticket__time-road-header']}>В ПУТИ</div>
              <div className={classes['ticket__time-road-info']}>21ч 15м</div>
            </div>
            <div className={classes['ticket__transfer-number']}>
              <div className={classes['ticket__transfer-number-header']}>2 пересадки</div>
              <div className={classes['ticket__transfer-number-info']}>HKG, JNB</div>
            </div>
          </div>
          <div className={classes.ticket__info}>
            <div className={classes['ticket__from-to-block']}>
              <div className={classes['ticket__from-to-header']}>MOW - HKT</div>
              <div className={classes['ticket__from-to-info']}>11:20 - 00:50</div>
            </div>
            <div className={classes['ticket__time-road-block']}>
              <div className={classes['ticket__time-road-header']}>В ПУТИ</div>
              <div className={classes['ticket__time-road-info']}>13ч 30м</div>
            </div>
            <div className={classes['ticket__transfer-number']}>
              <div className={classes['ticket__transfer-number-header']}>2 пересадки</div>
              <div className={classes['ticket__transfer-number-info']}>HKG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

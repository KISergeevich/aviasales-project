import s7 from '../../assets/img/s7.png'

import classes from './ticket.module.scss'

export default function Ticket({ ticket }) {
  const { price, segments } = ticket
  const [outbondFlight, returnFlight] = segments
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <div className={classes.ticket__price}>{price}</div>
        <img src={s7} alt="s7" className={classes.ticket__logo} />
      </div>
      <div className={classes.ticket__body}>
        <div className={classes.ticket__info}>
          <div className={classes['ticket__from-to-block']}>
            <div className={classes['ticket__from-to-header']}>
              {outbondFlight.origin} - {outbondFlight.destination}
            </div>
            <div className={classes['ticket__from-to-info']}>10:45 - 08:00</div>
          </div>
          <div className={classes['ticket__time-road-block']}>
            <div className={classes['ticket__time-road-header']}>В ПУТИ</div>
            <div className={classes['ticket__time-road-info']}>21ч 15м</div>
          </div>
          <div className={classes['ticket__transfer-number']}>
            <div className={classes['ticket__transfer-number-header']}>{outbondFlight.stops.lenght} пересадки</div>
            <div className={classes['ticket__transfer-number-info']}>{outbondFlight.stops.join(', ')}</div>
          </div>
        </div>
        <div className={classes.ticket__info}>
          <div className={classes['ticket__from-to-block']}>
            <div className={classes['ticket__from-to-header']}>
              {returnFlight.origin} - {returnFlight.destination}
            </div>
            <div className={classes['ticket__from-to-info']}>11:20 - 00:50</div>
          </div>
          <div className={classes['ticket__time-road-block']}>
            <div className={classes['ticket__time-road-header']}>В ПУТИ</div>
            <div className={classes['ticket__time-road-info']}>13ч 30м</div>
          </div>
          <div className={classes['ticket__transfer-number']}>
            <div className={classes['ticket__transfer-number-header']}>{returnFlight.stops.lenght} пересадки</div>
            <div className={classes['ticket__transfer-number-info']}>{returnFlight.stops.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

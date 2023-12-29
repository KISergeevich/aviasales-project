import { addMinutes, formatDuration, intervalToDuration, format } from 'date-fns'
import { ru } from 'date-fns/locale'

import s7 from '../../assets/img/s7.png'

import classes from './ticket.module.scss'

export default function Ticket({ ticket }) {
  const { price, segments } = ticket
  const [outbondFlight, returnFlight] = segments
  const outbondStart = new Date(outbondFlight.date)
  const outbondEnd = addMinutes(outbondStart, outbondFlight.duration)

  const returnStart = new Date(returnFlight.date)
  const returnEnd = addMinutes(returnStart, returnFlight.duration)

  const outbondDuration = intervalToDuration({
    start: outbondStart,
    end: outbondEnd,
  })
  const returnDuration = intervalToDuration({
    start: returnStart,
    end: returnEnd,
  })

  const outbondFormat = `${format(outbondStart, 'HH:mm')} - ${format(outbondEnd, 'HH:mm')}`
  const returnFormat = `${format(returnStart, 'HH:mm')} - ${format(returnEnd, 'HH:mm')}`
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
            <div className={classes['ticket__from-to-info']}>{outbondFormat}</div>
          </div>
          <div className={classes['ticket__time-road-block']}>
            <div className={classes['ticket__time-road-header']}>В ПУТИ</div>
            <div className={classes['ticket__time-road-info']}>
              {formatDuration(outbondDuration, { format: ['hours', 'minutes'], locale: ru })}
            </div>
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
            <div className={classes['ticket__from-to-info']}>{returnFormat}</div>
          </div>
          <div className={classes['ticket__time-road-block']}>
            <div className={classes['ticket__time-road-header']}>В ПУТИ</div>
            <div className={classes['ticket__time-road-info']}>
              {formatDuration(returnDuration, { format: ['hours', 'minutes'], locale: ru })}
            </div>
          </div>
          <div className={classes['ticket__transfer-number']}>
            <div className={classes['ticket__transfer-number-header']}>{returnFlight.stops.lenght} пересадки</div>
            <div className={classes['ticket__transfer-number-info']}>
              {returnFlight.stops.length !== 0 ? returnFlight.stops.join(', ') : 'Прямой рейс'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

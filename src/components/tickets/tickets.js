import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'

import Ticket from '../ticket/ticket'
import { selectError, selectStatus, handleMoreTickets } from '../../redux/tickets-slice'
import selectFilteredTickets from '../../redux/filtered-tickets-selector'

import classes from './tickets.module.scss'

export default function TicketList() {
  const status = useSelector(selectStatus)

  const err = useSelector(selectError)
  const filteredTickets = useSelector(selectFilteredTickets)

  const dispatch = useDispatch()
  const ticketsComponents = useMemo(() => {
    return filteredTickets.map((ticket) => {
      return <Ticket ticket={ticket} key={`${ticket.carrier}+${ticket.segments[0].date}+${ticket.segments[1].date}`} />
    })
  }, [filteredTickets])
  if (status === 'loading') {
    return (
      <div className={classes.spinBlock}>
        <Spin className={classes.spin} />
        <div>{ticketsComponents}</div>
        <form className={classes.formMore}>
          <button className={classes.buttonMore} type="button" onClick={() => dispatch(handleMoreTickets())}>
            Показать еще 5 билетов
          </button>
        </form>
      </div>
    )
  }
  if (status === 'succeeded') {
    if (filteredTickets.length !== 0) {
      return (
        <div>
          <div>{ticketsComponents}</div>
          <form className={classes.formMore}>
            <button className={classes.buttonMore} type="button" onClick={() => dispatch(handleMoreTickets())}>
              Показать еще 5 билетов
            </button>
          </form>
        </div>
      )
    }
    return <Alert className={classes.error} message="No tickets" type="info" showIcon />
  }
  if (status === 'failed') return <Alert className={classes.error} message={err} type="error" showIcon />
}

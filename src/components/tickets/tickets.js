import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import nextId from 'react-id-generator'
import { Alert, Spin } from 'antd'

import Ticket from '../ticket/ticket'
import { selectTickets, selectError, selectStatus, handleMoreTickets } from '../../redux/tickets-slice'
import selectFilteredTickets from '../../redux/filtered-tickets-selector'

import classes from './tickets.module.scss'

export default function TicketList() {
  const status = useSelector(selectStatus)
  const tickets = useSelector(selectTickets)
  const err = useSelector(selectError)
  const fiveTickets = useSelector(selectFilteredTickets)
  const dispatch = useDispatch()
  const ticketsComponents = fiveTickets.map((ticket) => {
    return <Ticket ticket={ticket} key={nextId()} />
  })
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
    if (tickets.length !== 0) {
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

import React from 'react'
import { useSelector } from 'react-redux'
import nextId from 'react-id-generator'
import { Alert, Spin } from 'antd'

import Ticket from '../ticket/ticket'

import classes from './tickets.module.scss'
import { selectTickets, selectError, selectStatus, selectFiveTickets } from './tickets-slice'

export default function TicketList() {
  const status = useSelector(selectStatus)
  const tickets = useSelector(selectTickets)
  const err = useSelector(selectError)
  const fiveTickets = useSelector(selectFiveTickets)
  const ticketsComponents = fiveTickets.map((ticket) => {
    return <Ticket ticket={ticket} key={nextId()} />
  })
  if (status === 'loading') {
    return (
      <div className={classes.spinBlock}>
        <Spin className={classes.spin} />
        <div>{ticketsComponents}</div>
      </div>
    )
  }
  if (status === 'succeeded') {
    if (tickets.length !== 0) {
      return <div>{ticketsComponents}</div>
    }
    return <Alert className={classes.error} message="No tickets" type="info" showIcon />
  }
  if (status === 'failed') return <Alert className={classes.error} message={err} type="error" showIcon />
}

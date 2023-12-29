import React from 'react'
import { useSelector } from 'react-redux'
import nextId from 'react-id-generator'
import { Alert, Spin } from 'antd'

import Ticket from '../ticket/ticket'

import classes from './tickets.module.scss'
import { selectTickets, selectError, selectStatus } from './tickets-slice'

export default function TicketList() {
  const status = useSelector(selectStatus)
  const tickets = useSelector(selectTickets)
  const err = useSelector(selectError)
  if (status === 'loading') {
    return <Spin />
  }
  if (status === 'succeeded') {
    if (tickets.length !== 0) {
      const ticketsComponents = tickets.map((ticket) => {
        return <Ticket ticket={ticket} key={nextId()} />
      })
      return <div>{ticketsComponents}</div>
    }
    return <Alert className={classes.error} message="No tickets" type="info" showIcon />
  }
  if (status === 'failed') return <Alert className={classes.error} message={err} type="error" showIcon />
}

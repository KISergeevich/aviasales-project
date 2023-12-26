import React from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../ticket/ticket'

import { selectTickets } from './tickets-slice'

export default function TicketList() {
  const tickets = useSelector(selectTickets).map((ticket) => {
    return <Ticket ticket={ticket} key={Math.floor(Math.random() * 100000000)} />
  })
  return <div>{tickets}</div>
}

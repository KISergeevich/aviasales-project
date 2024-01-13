import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'

import Ticket from '../ticket/ticket'
import { selectError, selectStatus, handleMoreTickets, selectCount, selectTickets } from '../../redux/tickets-slice'
import { filterTickets } from '../../redux/filtered-tickets-selector'
import { selectMode } from '../../redux/filter-mode-slice'
import {
  selectTransferNone,
  selectTransferOne,
  selectTransferThree,
  selectTransferTwo,
} from '../../redux/filters-transfer-slice'

import classes from './tickets.module.scss'

export default function TicketList() {
  const tickets = useSelector(selectTickets)
  const status = useSelector(selectStatus)
  const countMemo = useSelector(selectCount)
  const modeMemo = useSelector(selectMode)
  const transferOneMemo = useSelector(selectTransferOne)
  const transferTwoMemo = useSelector(selectTransferTwo)
  const transferThreeMemo = useSelector(selectTransferThree)
  const transferNoneMemo = useSelector(selectTransferNone)

  const err = useSelector(selectError)

  const dispatch = useDispatch()
  const ticketsComponents = useMemo(() => {
    const filteredTickets = filterTickets(
      tickets,
      transferNoneMemo,
      transferOneMemo,
      transferTwoMemo,
      transferThreeMemo,
      modeMemo,
      countMemo
    )
    return filteredTickets.map((ticket) => {
      return <Ticket ticket={ticket} key={`${ticket.carrier}+${ticket.segments[0].date}+${ticket.segments[1].date}`} />
    })
  }, [tickets, countMemo, modeMemo, transferOneMemo, transferTwoMemo, transferThreeMemo, transferNoneMemo])
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
    if (ticketsComponents.length !== 0) {
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

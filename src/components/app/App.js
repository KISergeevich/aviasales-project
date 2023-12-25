import React from 'react'

import fly from '../../assets/img/air.png'
import FilterHeader from '../filter-mode/filter-mode'
import NumberTransferFilter from '../number-transfers-filter/number-transfer-filter'
import TicketList from '../tickets/tickets'

import classes from './app.module.scss'

export default function App() {
  return (
    <div className={classes.body}>
      <div className={classes.logo}>
        <img src={fly} alt="logo-air" />
      </div>
      <NumberTransferFilter />
      <FilterHeader />
      <TicketList />
    </div>
  )
}

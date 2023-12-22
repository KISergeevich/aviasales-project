import React from 'react'

import fly from '../../assets/img/air.png'
import FilterHeader from '../filter-mod/filter-mod'
import NumberTransferFilter from '../number-transfers-filter/number-transfer-filter'
import TicketList from '../ticket-list/ticket-list'

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

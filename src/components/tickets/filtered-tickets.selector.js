const priceComporator = (a, b) => {
  //   if (a.price > b.price) return 1
  //   if (a.price === b.price) return 0
  //   if (a.price < b.price) return -1
  //   return 0
  return a.price - b.price
}

const durationComporator = (a, b) => {
  const durationA = a.segments[0].duration + a.segments[1].duration
  const durationB = b.segments[0].duration + b.segments[1].duration
  //   if (durationA > durationB) return 1
  //   if (durationA === durationB) return 0
  //   if (durationA < durationB) return -1
  //   return 0
  return durationA - durationB
}
const modeComporator = (mode) => {
  if (mode === 'cheap') {
    return priceComporator
  }
  if (mode === 'fastest') {
    return durationComporator
  }
  return () => 0
}

const predicateStopCount = (ticket, count) => {
  const outbontStops = ticket.segments[0].stops.length
  const returnStops = ticket.segments[1].stops.length
  return outbontStops <= count && returnStops <= count
}
const predicateStops = (none, one, two, three) => {
  return (ticket) =>
    (one && two && three && none) ||
    (!one && !two && !three && !none) ||
    (none && predicateStopCount(ticket, 0)) ||
    (one && predicateStopCount(ticket, 1)) ||
    (two && predicateStopCount(ticket, 2)) ||
    (three && predicateStopCount(ticket, 3))
}

const selectFilteredTickets = (state) => {
  const { tickets, mode, transfers } = state
  const { allTickets, countTickets } = tickets
  const { value } = mode
  const { none, one, two, three } = transfers

  return [...allTickets]
    .filter(predicateStops(none, one, two, three))
    .sort(modeComporator(value))
    .slice(0, countTickets)
}
export default selectFilteredTickets

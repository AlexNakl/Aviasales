const sortTicketsList = (tickets, tabs) => {
  const activeTab = tabs.find((tab) => tab.active === true);

  switch (activeTab.code) {
    case 'price':
      return [...tickets].sort((a, b) => a.price - b.price);
    case 'fastest':
      return [...tickets].sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      );
    case 'optimal':
      return [...tickets].sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration +
          a.price -
          (b.segments[0].duration + b.segments[1].duration + b.price)
      );
    default:
      return tickets;
  }
};

const filterTicketsList = (tickets, filters) => {
  const activefilters = filters.filter((filter) => filter.checked === true);

  return [...tickets].filter((ticket) => {
    switch (ticket.segments[0].stops.length) {
      case 0: // 'Без пересадок'
        return !!activefilters.find((filter) => filter.id === 2);
      case 1: // '1 пересадка'
        return !!activefilters.find((filter) => filter.id === 3);
      case 2: // '2 пересадки'
        return !!activefilters.find((filter) => filter.id === 4);
      case 3: // '3 пересадки'
        return !!activefilters.find((filter) => filter.id === 5);
      default: // 'Все'
        return !!activefilters.find((filter) => filter.id === 1);
    }
  });
};

export { sortTicketsList, filterTicketsList };

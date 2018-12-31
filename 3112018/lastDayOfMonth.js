let date = new Date(2015, 0, 2);

function getLastDayOfMonth(year, month) {
  //let date = new Date(year, month + 1, 0);
  //return date.getDate();
  let lastDay = 28;
  const date = new Date(year, month, lastDay);
  let currMonth;
  while (true) {
    date.setDate(date.getDate()+1);
    currMonth = date.getMonth();
    if (month !== currMonth) break;
    lastDay++;
  }
  return lastDay;
}

console.log(getLastDayOfMonth(2012,1));

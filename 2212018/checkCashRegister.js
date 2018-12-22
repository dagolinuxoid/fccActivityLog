function checkCashRegister(price, cash, cid) {
  let change = (cash*100 - price*100)/100;
  const h = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let money = cid.reduce((sum, [_, v]) => sum + v, 0);

  if (change === money) {
    return {status: 'CLOSED', change: cid};
  }

  if (change > money) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }

  const cashBack = [];

  for (let i = cid.length-1; i >= 0; i--) {

    const bankNote = cid[i][0];

    if (change >= h[bankNote] && cid[i][1] > 0) {

      const cashBackItem = [ bankNote, 0 ];
      while(change >= h[bankNote] && cid[i][1] > 0) {
        //change -= h[bankNote];
        //cid[i][1] -= h[bankNote];
        //cashBackItem[1] += h[bankNote];
        // a lot of repeated code in the first working version;
        console.log(change);
        change = (change*1000 - h[bankNote]*1000)/1000;
        cid[i][1] = (cid[i][1]*1000 - h[bankNote]*1000)/1000;
        cashBackItem[1] = (cashBackItem[1]*1000 + h[bankNote]*1000)/1000;
      }

      cashBack.push(cashBackItem);
    }

  }

  return change
    ? {status: 'INSUFFICIENT_FUNDS', change: []}
    : {status: 'OPEN', change: cashBack};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

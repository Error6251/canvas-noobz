function checkCashRegister(price, cash, cid) {
  price = Math.round(price * 100);
  cash = Math.round(cash * 100);
  let status = "INSUFFICIENT_FUNDS",
    change = [];
  let cidLen = cid.length;
  let total = 0;
  let different = cash - price;
  let left = 0.0;
  let coinNumber = [];
  let coinValue = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

  for (let i = 0; i < cidLen; i++) {
    cid[i][1] = Math.round(cid[i][1] * 100);
    total += cid[i][1];
    coinNumber.push(Math.floor(cid[i][1] / coinValue[i]));
  }

  console.log("\ntotal:", total, ";dif:", different);

  if (total == different) {
    status = "CLOSED";
    change = cid;

    for (let i = 0; i < change.length; i++) {
      change[i][1] = change[i][1] / 100;
    }

    console.log("CLOSED");
    return { status: status, change: change };
  } else {
    for (let i = cidLen - 1; i >= 0; i--) {
      let temp = 0;
      if (coinValue[i] > different) {
        continue;
      }
      temp = left + cid[i][1];

      if (temp > different) {
        let lolValue = 0;

        while (coinNumber[i] > 0 && different >= left + coinValue[i]) {
          left += coinValue[i];

          lolValue += coinValue[i];
          coinNumber[i]--;
        }
        if (lolValue != 0) change.push([cid[i][0], lolValue]);
      } else {
        left += cid[i][1];
        change.push(cid[i]);
      }

      // console.log(different/100,left/100);
      if (left == different) {
        console.log("Open");
        status = "OPEN";
        break;
      }
    }
    if (left < different) {
      console.log("ins");
      change = [];
    }

    for (let i = 0; i < change.length; i++) {
      change[i][1] = change[i][1] / 100;
    }

    console.log(change);

    return { status: status, change: change };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

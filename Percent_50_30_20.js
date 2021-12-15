// 50%30%20%

function getPercent(n) {
  const obj = {};
  obj["Needs"] = n * 50 / 100;
  obj["Wants"] = n * 30 / 100;
  obj["Savings"] = n * 20 / 100;

  console.log(obj);
  return n;
}
getPercent(10000);
getPercent(50000);
getPercent(100000);


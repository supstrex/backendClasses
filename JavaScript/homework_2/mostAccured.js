// function mostAccured(arr) {
//   let quantities = {};
//   let max = 0;
//   let num = arr[0];
//   for (let num of arr) {
//     //making an object with quantities of individual numbers
//     if (quantities[num]) {
//       ++quantities[num];
//     } else {
//       quantities[num] = 1;
//     }
//   }
//   for (let item in quantities) {
//     //searching for maximum
//     if (quantities[item] > max) {
//       max = quantities[item];
//       num = item;
//     }
//   }
//   return num;
// }
// console.log(mostAccured([12, 45, 45, 2, 78, 0, 45, 45, 45, 45, 0])); //example

function getMostFound(arr) {
  let obj = {};
  for (let num of arr) {
    if (obj[num]) {
      ++obj[num];
    } else {
      obj[num] = 1;
    }
  }
  return Object.keys(obj).reduce(function (aggr, val) {
    return obj[aggr] > obj[val] ? aggr : val;
  }, 0);
}
console.log(getMostFound([1, 1, 1, 1, 4, 4, 4, 23, 2, 23, 4, 5, 4]));

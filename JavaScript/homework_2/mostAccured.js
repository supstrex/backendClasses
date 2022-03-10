function mostAccured(arr) {
  let quantities = {};
  let max = 0;
  let num = arr[0];
  for (let num of arr) {
    //making an object with quantities of individual numbers
    if (quantities[num]) {
      ++quantities[num];
    } else {
      quantities[num] = 1;
    }
  }
  for (let item in quantities) {
    //searching for maximum
    if (quantities[item] > max) {
      max = quantities[item];
      num = item;
    }
  }
  return num;
}
console.log(mostAccured([0, 0, 12, 45, 45, 2, 78, 0, 45, 45, 45, 45, 0])); //example

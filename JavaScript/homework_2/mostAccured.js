function mostAccured(arr) {
  let quantities = {};
  let max = arr[0];
  for (let num of arr) {
    //making an object with quantities of individual numbers
    if (quantities[num]) {
      ++quantities[num];
    } else {
      quantities[num] = 1;
    }
  }
  for (let item of Object.values(quantities)) {
    //searching for maximum
    if (item > max) {
      max = item;
    }
  }

  return max;
}
console.log(mostAccured([0, 0, 12, 45, 45, 45, 2, 78, 0, 0, 0, 0])); //example

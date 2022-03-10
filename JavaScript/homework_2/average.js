function arithmeticAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(arithmeticAverage([10, 20, -50, 40, -20])); //example

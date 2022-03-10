function maximum(arr) {
  let max = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  console.log(`The maximum is ${max} at index ${index}`);
}
maximum([0, -456, 546, 7897, 0, -64999, 797979, 123]); //example

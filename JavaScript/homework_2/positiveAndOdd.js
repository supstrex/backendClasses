function positiveAndOdd(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num > 0 && num % 2 === 1) {
      ++sum;
    }
  }
  console.log(`There are ${sum} negative and odd number/s.`);
}
positiveAndOdd([0, 1, 2, -56, -89, 0, 78, -789]);

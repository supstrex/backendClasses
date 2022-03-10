function positiveVsNegative(arr) {
  let neg = 0,
    pos = 0,
    zero = 0;
  for (const num of arr) {
    if (num > 0) {
      ++pos;
    } else if (num < 0) {
      ++neg;
    } else {
      ++zero;
    }
  }
  console.log(
    `There are ${neg} negative, ${pos} positive numbers and ${zero} zeros.`
  );
}
positiveVsNegative([0, 1, 2, -56, -89, 0, 78, -789]);

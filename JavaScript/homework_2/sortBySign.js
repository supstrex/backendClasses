function sortBySign(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(arr[i]);
    } else {
      newArr.unshift(arr[i]);
    }
  }
  return newArr;
}
console.log(sortBySign([0, 45, -45, 47, -45, 79, -7])); //example

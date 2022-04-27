let arr = [1, 2, 8, 3, 0, 6, 456, 6, -213, 45, 78];
//selection sort
function swap(arr, minIndex, i) {
  let temp = arr[minIndex];
  arr[minIndex] = arr[i];
  arr[i] = temp;
}
function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }
}
//selectionSort(arr);

//buble sort
function bubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
//bubleSort(arr);
console.log(arr);

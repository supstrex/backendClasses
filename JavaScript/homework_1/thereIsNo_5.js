let num = 436489;
let numArr = (num + "").split("");
let answer = false;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] == 5) {
    answer = true;
    break;
  }
}
console.log(answer ? "NO there is a 5" : "YES");

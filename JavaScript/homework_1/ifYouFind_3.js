let num = 4536489;
let numArr = (num + "").split("");
let answer = false;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] == 3) {
    answer = true;
    break;
  }
}
console.log(answer ? "YES" : "NO");

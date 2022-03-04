let num = 3234576789;
let answer = false;

while (num / 10 != 0) {
  if ((num / 10) % 10 >= num % 10) {
    answer = true;
    break;
  }
  num = Math.floor(num / 10);
}
console.log(answer ? "NO" : "YES");
//most propaply an Indian code :D

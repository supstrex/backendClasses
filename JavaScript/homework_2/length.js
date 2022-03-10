function lengthOf(str) {
  if (typeof str === "string") {
    //verification
    return str.length;
  }
  return -1;
}
console.log(lengthOf("This is my string")); //example

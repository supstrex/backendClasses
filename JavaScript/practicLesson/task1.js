// let data = [
//   "sjhfgasdhsafhasgfasgfjg",
//   "sja",
//   "jdsHFJHhfk",
//   "kasjfh",
//   "ahfgj",
//   "Arthur",
// ];
// let filtering = function (arr) {
//   let newdata = data.filter(function (element) {
//     if (
//       element.toLowerCase().includes("d") ||
//       element.toLowerCase().includes("k") ||
//       element.length < 5 ||
//       element.length >= 13
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   });
//   return newdata;
// };

// console.log(filtering(data));
// let arr = ["asd", ["ajadgjf", "jagjfg"], "asgfj"];
// function clone(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       clone(arr[i]);
//     }
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// console.log(clone(arr));

// let arr = [1, 2, 2, 3, 3, "atr", "atr"];

// function dublicates(arr) {
//   let obj = {};
//   arr.forEach((element) => {
//     if (obj[element]) {
//       obj[element][1]++;
//     } else {
//       obj[element] = [element, 1];
//     }
//   });
//   let newArr = [];
//   for (const key in obj) {
//     if (obj[key][1] > 1) {
//       newArr.push(obj[key][0]);
//     }
//   }
//   return newArr;
// }
// console.log(dublicates(arr));

// let obj = {
//   hello: 6,
//   string: 5,
//   other: 12,
//   obj: {
//     a: 1,
//     b: 2,
//   },
// };
// let arr = Object.entries(obj);
// console.log(arr);

// let obj1 = {
//   name: "Arthur",
//   age: 27,
//   email: "arthuralex@gmail.com",
// };
// let obj2 = {
//   name: "Gev",
//   age: 29,
//   email: "arthuralex@gmail.com",
// };
// let obj3 = {
//   name: "Valod",
//   age: 15,
//   email: "arthuralex@gmail.com",
// };
// let obj4 = {
//   name: "Valod",
//   age: 18,
//   email: "arthuralex@gmail.com",
// };

// let data = [obj1, obj2, obj3, obj4];

// function sortByAge(data) {
//   let newArr = [];
//   let lastArr = [];
//   for (let i = 0; i < data.length; i++) {
//     newArr[data[i].age] = data[i];
//   }
//   newArr.forEach((element) => {
//     if (element !== "undefined") {
//       lastArr.push(element);
//     }
//   });
//   return lastArr;
// }
// console.log(sortByAge(data));

// let mult = (x) => {return x*x};
// let o = {
//   x: 1,
//   y: 2,
//   z: 3,
//   w: mult
// }
// o.propertyIsEnumerable("toString");
// for(let p in o){
//   console.log(p);
// }
// for(let p in o){
//   if(!o.hasOwnProperty(p)){
//     console.log("true")
//   }
// }
// for(let p in o){
//   if(typeof o[p] === function){
//     console.log("false")
//   }
// }
let arr = [2, 1, 3];
let sum = arr + arr;
console.log(sum);

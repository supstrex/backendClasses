let num = 85474589 + "";
//վերածում է string-ի

let swaped =
  num.charAt(num.length - 1) + //վերջին թվանշանը
  num.slice(1, num.length - 1) + //մեջտեղի փոփոխման չենթարկվող թվանշանը
  num.charAt(0); //առաջին թվանշանը

console.log(swaped); //ստուգենք

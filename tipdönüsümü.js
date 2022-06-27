//number a çevirmek

// let number1 = "11px";
// console.log(typeof number1); //stringdir //değeri 11px dir

let number2 = "11px";
console.log(Number(number2)); //değeri NaN
console.log(typeof Number(number2)); //tipi number oldu

let number3 = "11px";
console.log(parseInt(number3)); //değeri 11
console.log(typeof parseInt(number3)); //türü number

//özet Number çevirmede değeri (string ve numberdan oluşuyorsa değişken) NaN yapabilir.
//parseInt ise her zaman değeri verir.

//Stringe çevirmek
let number4 = 55;
console.log(typeof number4, number4); //tipi number  değeri 55
nToStr = number4.toString();
console.log(typeof nToStr, nToStr); //tipi string değeri 55
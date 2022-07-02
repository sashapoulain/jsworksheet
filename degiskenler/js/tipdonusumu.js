//number a çevirme

let n1 = "11px";
console.log(n1);
console.log(typeof n1);
//1.yol Number
console.log(Number(n1)); //değeri 11 olarak değişir ama NaN değerini döndürür
console.log(typeof Number(n1)); //tipi number oldu
//2.yol parseInt
let n2 = "11px";
console.log(typeof n2, n2);
console.log(parseInt(n2));
console.log(typeof parseInt(n2)); //tipi number oldu
console.log(typeof n2); //tipi hala string oldu

//özet Number çevirmede değeri (string ve numberdan oluşuyorsa değişken) NaN yapabilir.
//parseInt ise her zaman değeri verir.

//Stringe çevirmek
let n3 = 55;
console.log(typeof n3, n3); //number 55
console.log(String(n3)); //string "55"
console.log(typeof String(n3)); //string

//stringe çevirme 2.yol
let n4 = 10;
console.log(typeof n4, n4); //number 10
ntStr = n4.toString();
console.log(typeof ntStr, ntStr); //string "10"
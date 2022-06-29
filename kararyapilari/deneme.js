/*
n tekse Weird yaz
n çiftse ve 2 ve 5 dahil aralığındaysa Not Weird yaz
n çift ve 6-20 dahil aralığındaysa Weird yaz
n çift ve 20 den büyükse Not Weird yaz

*/

let n = prompt("sayı giriniz");
if (n % 2 !== 0) {
    console.log("Weird");
} else if (n % 2 === 0 && n >= 2 && n <= 5) {
    console.log("Not Weird");
} else if (n % 2 === 0 && n >= 6 && n <= 20) {
    console.log("Weird");
} else if (n % 2 === 0 && n > 20) {
    console.log("Not Weird");
}
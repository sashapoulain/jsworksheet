//array oluşturma
let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);
//arraye başka değerler verme
items = [4, 5, 6];
console.log(items);
//+= ile array içindeki değerlere ekleme yaparız
// items += [7, 8, 9];
console.log(items);
//array uzunluğunu bulma
console.log(items.length);
//html sayfasına yazdırmak
document.querySelector("#info").innerHTML = `dizi uzunluğu: ${items.length}`;
//boş array -liste oluşturma
let emptyArr = [];
console.log(emptyArr);
//ilk elemana ulaşmak
console.log(items[0]);
//son elemana ulaşmak
console.log(items);
console.log(items[items.length - 1]);
//türüne bakmak
//typeof array çıktısı da olsa object diye türünü belirtir.
console.log(typeof items);
//2.yol
let s = "şeyma y";
console.log(Array.isArray(items));
console.log(Array.isArray(s));
//ornek
console.log(Array.isArray([])); //true
console.log(Array.isArray(1)); //false
//is array kontrol
let a = "şeyma ve mert";
if (Array.isArray(a) === true) {
    console.log("array");
} else {
    console.log("string");
}
//dizi ortasındaki elemanı bulma
//önce dizi uzunluğuna bakıp tek mi çift mi diye bakmamız gerek
let d1 = [1, 3, 5, 7];
let d2 = [2, 4, 6];
console.log(d1.length);
console.log(d2.length);
console.log(d2[Math.floor(d2.length / 2)]); //d2 tek sayılı 1 dizi sorun yok
console.log(d1[Math.floor(d1.length / 2)]); //d1 çift sayılı 1 dizi o nedenle hangisini almak istiyorsak
//-1 ile alabiliriz
console.log(d1[Math.floor(d1.length / 2) - 1]);
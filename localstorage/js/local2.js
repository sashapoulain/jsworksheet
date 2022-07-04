/*
not: aslında localde string veya düz number gibi verileri kolayca kaydederiz
localStorage.setItem("number",11 );
şeklinde kaydederiz.
ve 
localStorage.getItem("number");
şeklinde okuyabiliriz.
işler farklı veri türlerini kaydetmeye çalıştığımızda karışıyor
bu durumda localstorage yalnızca string türünde veri aldığından
json ile önce veriyi stringe çevirip kaydediyoruz. (JSON.stringify)
ve sonra json ile okuyabiliyoruz. (JSON.parse)

*/
//özet
//locale veri nasıl kaydedilir
/*
localStorage.setItem("veri", JSON.stringify(veri));
let veri = JSON.parse(localStorage.getItem("veri"));
şeklinde 
tabi buradaki sıkıntı şu: en son yazılan veriyi kaydediyor.
ama onu da array tutarak düzelticez.
ornek.html ve ornek.js de ornekler mevcuttur.

*/

let users = {
    name: "Şeyma Yılmaz",
    mail: "sashapoulain5@gmail.com",
    isActive: true,
};
localStorage.setItem("user", JSON.stringify(users));
let uInfo = JSON.parse(localStorage.getItem("user"));
console.log(uInfo);

//ornek

let items = [1, 2, 3, users];
localStorage.setItem("newItems", JSON.stringify(items));
let newItems = JSON.parse(localStorage.getItem("newItems"));
console.log(newItems);
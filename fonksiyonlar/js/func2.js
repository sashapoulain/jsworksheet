//fonksiyonun dışa bağımlılığını azaltmak gerekir
//ornek
let name = "şeyma";

function greetings() {
    console.log(`merhaba ${name}`);
}
greetings();

//yukarıdaki fonksiyon dışa bağımlıdır.
//bağımsızlığı parametreyi fonksiyona vererek sağlayabiliriz.

function greetingsParam(name) {
    console.log(`merhaba ${name ? name : "isimsiz"} `);
    //yukarıdaki log ayrıca template lit kullanımına da örnektir.
    console.log(`merhaba ${name}`);
    //bu şekilde de kullanılabilir temp. lit. olmadan.
}
greetingsParam();

//fonksiyon içinde de parametreye default değer verebiliriz.

function sayHi(name = "bilinmiyor") {
    console.log(`Merhaba ${name}`);
}
sayHi();
sayHi("şeyma");

//fonksiyonlarda global scope ve function scope

let n = "mert";
//iki n ayrıdır. ikisi de n olmasına rağmen farklıdırlar

function hi(n = "") {
    console.log(`merhaba ${n}`);
}
hi();
//burada merhaba yanına hiçbir şey almaz.
// let n = "mert"; global scopedur
//n = "" function scopedur bu aynı değişken isminde olsalar da globali bastırır.

//fonksiyonlar 1' den fazla parametre de alabilir. ve onlara da default değer verebiliriz.

function isimSoyisim(name = "bilinmiyor", surname = "bilinmiyor") {
    console.log(`merhaba ${name} ${surname}`);
}
isimSoyisim();
isimSoyisim("şeyma", "yılmaz");

//RETURN

function sayHi(name, surname) {
    let info = `Merhaba ${name} ${surname}`;
    return info;
}
let sayHiInfo = sayHi("mert", "korkmaz");
let sayHiInfo2 = sayHi("şeyma", "yılmaz");
console.log(sayHiInfo);
let title = document.querySelector("#title");
title.innerHTML = sayHiInfo;
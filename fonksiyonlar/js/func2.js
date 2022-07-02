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
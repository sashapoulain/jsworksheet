//konular
/*
1-length
2-indexOf
3-lastIndexOf
4-search
5-slice
6-replace
7-concat
8-split
*/

let name = "şeyma";
//stringin uzunluğunu bulma
console.log(name.length);
//stringin en son elemanını bulma
console.log(name[name.length - 1]);

//----------------------------------------------------------------------------------------------------------------------
//indexOf("degisken") içindeki degisken veya d harfi de olur nerede kaçıncı eleman onu verir
console.log(name.indexOf("a"));
//4
const lastName = "korkmaz";
console.log(lastName.indexOf("k"));
//0
console.log(lastName.indexOf("ma"));
//4

//----------------------------------------------------------------------------------------------------------------------
//lastIndexOf("degisken") içindeki en son nerede onu verir.
let i = "Oğuz duran";
console.log(i.lastIndexOf("u"));
//6

let metin = "Ben javascript çalışıyorum";
console.log(metin.indexOf("en"));
//e = 1
console.log(metin.lastIndexOf("ja"));
//j = 4

//----------------------------------------------------------------------------------------------------------------------
//search

let k = "Bu search için yazılan bir cümledir.";
console.log(k.search("c"));
console.log(k.search("i"));
console.log(k.search("yazılan"));

//----------------------------------------------------------------------------------------------------------------------
//slice
let cumle = "Bu cumle slice için yazılan bir cümledir.";
console.log(cumle.slice(0, 5));
//0 dahil 5 değil : 0 dan 5 e kadar olan kısmı al geri kalanı at.
console.log(cumle.slice(5, 10));
//5 dahil 10 değil : 5 dan 10 e kadar olan kısmı al geri kalanı at.
let m = "şeyma";
console.log(m.slice(2));
//slice'da tek rakam verirseniz o rakam ve sonraki karakterleri alır.
//2 ve sonrasını al.
let a = "mert";
console.log(a.slice(1));
//1 ve sonrasını al.

let s = "süt is my baby";
s = s.slice(2);
console.log(s);
//2 ve sonrasını aldık.

//----------------------------------------------------------------------------------------------------------------------
//replace
let u = "şeyma ve mert";
u = u.replace("ve", "ile");
console.log(u);

//toUpperCase ve toLowerCase
let y = "şeyma ve mert";
console.log(y.toUpperCase());
console.log(y.toLowerCase());

//----------------------------------------------------------------------------------------------------------------------
//concat

let isim = "şeyma";
let soyisim = "yılmaz";
console.log(isim + soyisim);
console.log(isim.concat(" ", soyisim));
let f = "anne";
let f2 = "baba";
console.log(f.concat("ve", f2));

//----------------------------------------------------------------------------------------------------------------------
//charAt
let isim2 = "şeyma";
console.log(isim2.charAt(0));
//0. indexi ver
console.log(isim2.charAt(1));
console.log(isim2.charAt(2));
isim2 = isim2.charAt(3);
console.log(isim2);

//----------------------------------------------------------------------------------------------------------------------
//split
//tek bir indexte split("") harf harf dizi yapar
//tek bir indexte split(" ") kelime olarak dizi yapar
let isim3 = "şeymacığım";
console.log(isim3.split(""));
//her bir karakteri bir diziye atar.
//['ş', 'e', 'y', 'm', 'a', 'c', 'ı', 'ğ', 'ı', 'm']
console.log(isim3.split(","));
//tek indexte virgül ile split sadece diziye çevirir.
//['şeymacığım']
//2 indexte virgül ile split indexleri virgül ile ayırır.
const ny = "leyligül ve fırat";
const yn = "leyligül, ve, fırat";
console.log(ny.split(","));
//['leyligül ve fırat']
console.log(yn.split(","));
//['leyligül', 've', 'fırat']
const mmm = "asiye";
console.log(mmm.split(""));
console.log(mmm.split(" "));
console.log(mmm.split("a"));
//a dan sonrasını dizi yap

const isimler = "şeyma, mert";
console.log(isimler.split(","));
//['şeyma', 'mert']
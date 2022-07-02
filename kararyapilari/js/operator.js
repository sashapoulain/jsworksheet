let price = "100";
let user = "şeyma";
//== eşit mi kontrolü
console.log(price == 100);
//=== eşit mi kontrolü
//bu hem değer hem tür karşılaştırır.
//kullanılması gereken bu.
console.log(price === 100);
//!= eşit değil mi kontrolü
console.log(price != 100);
console.log(price !== 10);
//küçük veya büyük
console.log(price < 100);
console.log(price > 100);
//küçük/büyük veya eşit
console.log(price <= 100);
console.log(price >= 100);
//ve && iki bilgi içerir. ve ikisininde geçerli olması gerek
console.log(price && user != "guest"); //true döner ikiside değil çünkü
price = 0;
console.log(price > 0 && user != "guest"); //false döner
//boolean veri tipindeki değer doluysa true boşsa false' dır.
//orn:
let isActive = false;
console.log(isActive);
//true çünkü isActive değeri boolean tipinde dolu
//orn 2:
let b;
b = "";
console.log(Boolean(b));
//false çünkü b boştur.

//orn 3:
let k = null;
console.log(Boolean(k));
//false çünkü k null'dır.

//orn 4:
let m = undefined;
console.log(Boolean(m));
//false çünkü m undefined'dır.

//orn 5:
let a = "dolu";
console.log(Boolean(a));
//true çünkü a dolu string'dır.

console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
console.log(Boolean(1)); //true
console.log(Boolean(-0)); //false
console.log(Boolean(-1)); //true

//---------------------------------------------------------------------------------------------------------------------

//boolean da şöyle bir kontrol sağlanabilir
let userName = prompt("Kullanıcı adınızı giriniz");
if (userName.length > 0) {
    console.log("true: dolu");
} else {
    console.log("false: boş");
}
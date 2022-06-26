let isActive = false;
isActive = true;
console.log(isActive); //true çünkü isActive değeri belirtilmiş.

let userName;
let isUserName = Boolean(userName);
console.log(isUserName); //false çünkü userName belirsiz bi değişken.

console.log(Boolean("0")); //true
console.log(Boolean("")); //false

console.log("dan sonra");
console.log(Boolean(0)); //false
console.log(Boolean(-0)); //false
console.log(Boolean(-0.1)); //true

// if (userName.length > 0) {
//     //bu şununla aynı
//     //Boolean(userName.length>0)
// }

let a;
console.log(Boolean(a)); //false

const b = "0";
console.log(Boolean(b)); //true

var x = 10 / "a";
console.log(Boolean(x)); //false

var y = "" || -2 || "JavaScript";
console.log(Boolean(y)); //true

var z = { 2: "js" };
console.log(Boolean(z)); //true
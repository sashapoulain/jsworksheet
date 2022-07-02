//boolean true,false,var,yok,1,0 şeklinde primitive bir veri türüdür.

//aşağıdaki değerlerin true m false m olduğunu altlarına yorum olarak yazın.

let isActive = true;
console.log(isActive);
console.log(typeof isActive);

isActive = false;
console.log(isActive);
console.log(typeof isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);
console.log(typeof isUserName);

console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(-0));
console.log(Boolean(-0.1));

// 0 ve -0 haric bütün sayılar true dur
//içinde değer belirten bütün değerler true döner
//değer belirtmeyen her değişken false döner
let a;
console.log(Boolean(a));

const b = "0";
console.log(Boolean(b)); //true

let x = 10 / "a";
console.log(Boolean(x));
let a = 123 + "";
console.log(a, typeof a);

//number to string denemesi
let b = 123;
console.log(b, typeof b);
let c = b.toString();
console.log(c, typeof c);

//string to number denemesi
let d = "123";
console.log(d, typeof d);
// let e = Number(d);
e = parseInt(d);
console.log(e, typeof e);

//yalnızca string değer number a çevrilmez. NaN olur.
let f = "123abc";
console.log(f, typeof f);
let g = Number(f);
console.log(g, typeof g);
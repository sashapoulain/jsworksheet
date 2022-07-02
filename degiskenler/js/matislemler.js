//üs alma işlemi şöyle yapılır **
console.log(2 ** 4);

//Math Objesi
//floor: aşağı yuvarlar
let s1 = Math.floor(3.7);
console.log(s1);
//ceil: yukarı yuvarlar
let s2 = Math.ceil(5.3);
console.log(s2);
//round 5 ve 5 ten büyükse yukarı küçükse aşağı yuvarlar
let s3 = Math.round(7.6);
console.log(s3);
let s4 = Math.round(7.3);
console.log(s4);
let s5 = Math.round(9.5);
console.log(s5);

//random sayı üretme örneği

let randomSayi = Math.floor(Math.random() * 11);
console.log(randomSayi);
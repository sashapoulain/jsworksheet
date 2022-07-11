//template literal
let name = "sasha";
let age = 23;
let bd = "13.08.1992";
console.log(
    `Benim adım ${name}, bana kısaca ${name[0].toUpperCase()}. diyebilirsin. Yaşım ${age} ve tam olarak ${bd} yılında doğmuşum.`
);

//charAt()

let n = name.charAt(0);
console.log(n);

//search();
let email = "sashapoulain5@gmail.com";
let r = email.search(5);
console.log(r);
let et = email.search("@");
console.log(et);
let random = email.search("random");
console.log(random);

//slice();

let email2 = email.slice(email.search("@"));
console.log(email2);

let email3 = email.slice(email.search("@") + 1);
console.log(email3);
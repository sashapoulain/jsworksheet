//stringler ve metodları
let email = "sashapoulain5@gmail.com";
let fName = "Sasha";
let lName = "Poulain";

//uzunluk

console.log(
    "email uzunluğu:",
    email.length,
    "İsim uzunluğu:",
    fName.length,
    "Soyisim uzunluğu:",
    lName.length
);
console.log("METHODS");
//metodlar
//ilk karakteri bulmak
//1.yol
console.log(fName[0]);
//2.yol
console.log(fName.charAt(0));
console.log(fName.charAt(1));
console.log(fName.charAt(2));

//Search string içinde istediğimiz bilgiyi arayıp bulmak için
//search içindeki değer varsa orayı gösterir yoksa -1 verir.
console.log(email.search("asdfg")); //-1 çünkü yok

let str = "Mert Korkmaz";
console.log(str.search("M"));
console.log(str.search("K"));

//
console.log(email.search("@"));
//yada 13.indexte ne var da denilebilir

console.log(email[13]);

//SLICE : belli bir yere kadar olan kısmı almak için kullanılır

console.log(email.slice(0, 13));
console.log(email.slice(13, 23));
console.log(fName.slice(0, 1));

let domain = email.slice(14, 23);
console.log(domain);
domain = domain.replace("gmail", "kodluyoruz");
console.log(domain);
//gmail.com' u şu şekilde de alabiliriz.
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

let d = email.slice(email.search("@"));
console.log(d);

//ornek: fName' de h den sonrasını al.
let f = fName.slice(fName.search("h"));
console.log(f);

//indexOf : belirtilen değeri arar ve eğer bulursa indexini döndürür.
console.log(email.indexOf("@"));
console.log(email.indexOf("."));

//replace bilgi değişimi
//1.yol
// console.log(email.replace("@gmail.com", "@icloud.com"));
//2.yol
email = email.replace("@gmail.com", "@icloud.com");
console.log(email);

//includes var mı yok mu?
//true veya false döner.

email = email.includes("@");
console.log(email);

//endswith, startswith istediğim bilgiyle başladı veya bitti mi?

// ornek
let firstName = "mert";
let lastName = "korkmaz";
let fullName = `${firstName[0].toUpperCase()}${firstName}`;
console.log(fullName);

let fullName2 = `${firstName[0].toUpperCase()}${firstName.slice(1)} `;
console.log(fullName2);

let fullName3 = `${firstName[0].toUpperCase()}${firstName.slice(
  1
)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
console.log(fullName3);
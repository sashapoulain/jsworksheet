let email = "sashapoulain5@gmail.com";
let firstName = "şeyma";
let lastName = "yılmaz";

console.log(email.length);

//ilk karakteri bulmak.
console.log(firstName[0]);
console.log(firstName.charAt(0));

//string içinde istediğimiz bilgiyi arayıp bulmak için
console.log(email.search("@"));
//veya
console.log(email[13]);
//search içindeki değer varsa orayı gösterir yoksa -1 verir.
console.log(email.search("asdfg")); //-1 çünkü yok

//belli bir yere kadar olan kısmı almak için...slice kull.

// let DOMAIN = email.slice(email.search("@") + 1);
// console.log(DOMAIN);
//slice içine yazdığın ile birlikte olan kısmını alıp bize verir.
//çıktı gmail.com
let DOMAIN = email.slice(email.search("@"));
console.log(DOMAIN);
//çıktı @gmail.com
console.log(email.slice(email.indexOf(".")));
//.com
console.log(DOMAIN.slice(0, 5));
//@gmai

console.log(DOMAIN.slice(1, DOMAIN.indexOf(".")));
//gmail

//replace bilgi değişimi
console.log(email.replace("@gmail.com", "@icloud.com"));
//sashapoulain5@icloud.com

email = email.replace("@gmail.com", "@icloud.com");
console.log(email);
//sashapoulain5@icloud.com

//includes var mı yok mu?
// email = email.includes("@");
// //true veya false döner.
// console.log(email);

//istediğim bilgiyle başladı veya bitti mi? endswith, startswith
email = email.endsWith("@");
console.log(email);
//@ile bitmediği için false döner.

// let fullName = `${firstName[0].toUpperCase()}${firstName}`;
// console.log(fullName);
//çıktı: Şşeyma
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} `;
console.log(fullName);
//çıktı: Şeyma

// let fullName = `${firstName[0].toUpperCase()}${firstName.slice(
//    1
//  )} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
//  console.log(fullName);
//çıktı: Şeyma Yılmaz
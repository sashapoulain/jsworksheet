let email = "kodluyoruz@kodluyoruz.org";
let firstName = "JavaScript";
let lastName = "BOOTCAMP";

//Her birinin karakter uzunluğunu bul
console.log(email.length);
console.log(firstName.length);
console.log(lastName.length);
//lastName'in son karakterini bul.
console.log(lastName[lastName.length - 1]);
//firstName'in ilk karakterini bul.
console.log(firstName[0]);
// her birinin 2.karakteri nedir charAt ile bul
console.log(email.charAt(2));
console.log(firstName.charAt(2));
console.log(lastName.charAt(2));
//firstName'i büyük harfe lastName'i küçük harfe çevir
console.log(firstName.toLocaleUpperCase());
console.log(lastName.toLocaleLowerCase());
//lastName'in ilk harfi büyük,diğerlerini küçük harfe çevir
console.log(lastName[0]); //B
console.log(lastName[0].toLocaleUpperCase()); //B belki küçükse diye yinede büyük yapıldı
console.log(lastName.slice(1)); //OOTCAMP: yani 1 den sonrasını al
console.log(lastName.slice(1).toLocaleLowerCase()); //ootcamp: küçük yap
// //ikisini template literal ile birleştir
console.log(
    lastName[0].toLocaleUpperCase(),
    lastName.slice(1).toLocaleLowerCase()
);
//birleştir tek bir yerde yaz template literal ile
console.log(
    `${lastName[0].toLocaleUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`
);

//firstName'in ilk harfini büyük,diğerlerini küçük harfe çevir
let d = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`;
console.log(d);

//search ile emailde @ var mı araştır
console.log(email.search("@"));
//10.karakter @
console.log(email.search("olma"));
//-1 çünkü olma diye bir şey yok email içinde.
//indexOf ile  @ var mı araştır
console.log(email.indexOf("@"));
console.log(email.indexOf("olma"));
//@den sonrasını al
console.log(email.slice(10));
//@kodluyoruz.org
//@ ' den sonrasını almak için 1.yol
console.log(email.slice(email.search("@") + 1));
//2.yol
let domain = email.slice(11);
console.log(domain);
//domain' i gmail.com ile değiştir.
console.log(email);
//1.yol
console.log(email.replace("@" + domain, "@gmail.com"));
//2.yol
let e = email.replace("kodluyoruz.org", "gmail.com");
console.log(e);

//email içinde @ var mı?
console.log(email.includes("@"));
//@ ile mi bitiyor
console.log(firstName.endsWith("@"));
//@ ile mi başlıyor
console.log(firstName.startsWith("@"));
//java yerine javascript yazın
let language = "Java";
//1.yol
// console.log(language);
// language = "javascript";
// console.log(language);
//2.yol
language = language.replace("Java", "javascript");
console.log(language);

//url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.
let url = "www.kodluyoruz.org";
domain = url.slice(4);
console.log(domain);
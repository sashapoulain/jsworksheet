//template literal kullanımı
// let name = prompt("Adınızı giriniz");
// let birthYear = prompt("Doğum yılınızı giriniz");
// let age = 2022 - birthYear;
// console.log(
//     `Merhaba ben ${name}, ben ${birthYear} yılında doğdum ve şu an ${age} yaşındayım`
// );
//ORNEK 2
// let name2 = prompt("isim?");
// let isim = `Benim adım ${name2}`;
// let saat = `ve ben saat :  ${new Date().getHours()}.00 da doğdum.`;
// console.log(isim, saat);

//ORNEK 3
let nName = prompt("isim?");
console.log(`kısa ismim: ${nName[0]}.`);
//bu şekilde noktayla bile kullanabiliriz.

// let tanim = `En sevdiğim yemekler\n
// Mantı\n
// Köfte\n`;
// console.log(tanim);

// let x = 10;
// let y = 20;
// console.log(`${x} çarpı ${y} eşittir ${x * y}`);

// let ad = "Sasha";
// let soyad = "Poulain";
// let yas = "21";
// let cinsiyet = "Kadın";
// const kisi = `
// <p>Benim adım ${ad}</p>
// <p>Soyadım ${soyad}</p>
// <p>Yaşım ${yas}</p>
// <p>Cinsiyetim ${cinsiyet}</p>
// `;
// document.body.innerHTML = kisi;
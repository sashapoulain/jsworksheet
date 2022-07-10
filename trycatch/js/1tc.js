//trycatch : bilmediğimiz veya dışarıdan bilgi alacağımız yapılar varsa bunları try catch içine koyabiliriz.
//ornek
//hatalı kod yazdık
///---------------------------------------------
// let items;
// items.forEach((item) => console.log(item));
// //devamında düzgün hatasız kod yazdık.
// console.log("try catch deneme");
// let info = "Seyma";
// console.log(info);
//-----------------------------------------------------
//mesela bu bloğu çalıştırırsak şöyle bir hata alırız...
// Uncaught TypeError: Cannot read properties of undefined (reading 'forEach') at 1tc.js:5:7
//yanlış koddan dolayı düzgün kısımlar da çalışmaz.
//try catch ile yazalım...

let items2;
try {
    items2.forEach((index) => console.log(index));
} catch (error) {
    console.log("Hata oluştu", error);
}
let info2 = "Seyma";
console.log(info2);
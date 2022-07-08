//slice ve ... diziyi kopyalar aynı zamanda.
//orn

let dizi = [1, 2, 3, 4, 5];
let copyd = dizi;
console.log(dizi);
console.log(copyd);
copyd.pop();
console.log(copyd);
console.log(dizi);
//bu şekilde dizi kopyalanmıyor aslında. aynı dizi üzerinden işlemler devam ediyor.
//diziye ne yaparsan copyd de onu yaparsın otomatik

//ama slice kullanırsak...copyalamış oluruz ve elimizde 2 ayrı dizi olur.
let copySlice = dizi.slice();
console.log(copySlice);
console.log(dizi);
copySlice.pop();
console.log(copySlice);
console.log(dizi);

//aynı işlemi ...dizi şeklinde de kopyalama olur.
let copySpread = [...dizi];
console.log(copySpread);
console.log(dizi);
copySpread.pop();
console.log(copySpread);
console.log(dizi);

//birden fazla arrayi birleştirirken ... kullanırız.
let d1 = ["a", "b", "c", "d", "e"];
let d2 = ["f", "g", "h", "i", "j"];
let all = [...d1, ...d2];
console.log(all);

let diziOrn = [1, 2, 3, 4, 5];
// let s = diziOrn.splice(0, 3); //0. indexden itibaren 3 eleman sil
// console.log("kalan", diziOrn);
// console.log(`atılan dizi: ${s}`);

// diziOrn.splice(1, 2); //1 den başlayarak 2 eleman at.
// console.log(diziOrn);

// diziOrn.splice(2, 1);
// console.log(diziOrn);

// diziOrn.splice(0, 4);
// console.log(diziOrn);
//SPLICE DA 2 ELEMAN VARSA BIR ŞEYLERİ ATIP KALANINI YAZDIRIR
//SPLICE DA 3 ELEMAN VARSA BIR ŞEYLERİ EKLER. İLKİ NEREYE EKLEYECEĞİ, İKİNCİ PARÇALANICAK MI PARÇALANMAYACAK MI, SONUNCUSU NEYİ EKLEYECEK

// diziOrn.splice(0, 0, "al");
// console.log(diziOrn);
//['al', 1, 2, 3, 4, 5]
diziOrn.splice(1, 0, "bir");
console.log(diziOrn);
//[1,'bir', 2, 3, 4, 5]
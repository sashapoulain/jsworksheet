//İki Sayıdan Büyük Olanı Bulalım

// let n1 = prompt("1.sayı?");
// let n2 = prompt("2.sayı?");
// if (n1 > n2) {
//     console.log(`${n1} büyük sayıdır.`);
// } else if (n2 > n1) {
//     console.log(`${n2} büyük sayıdır.`);
// } else {
//     console.log(`yanlış bir şey yaptınız!`);
// }

//Vize - Final Not Ortalamasına Göre Geçme - Kalma

// let vize = prompt("Vize notunuzu giriniz");
// let final = prompt("Final notunuzu giriniz");
// let vizeFinal = Number(vize) + Number(final);
// let ortalama = vizeFinal / 2;
// if (ortalama >= 50) {
//     console.log(`geçti`);
// } else {
//     console.log(`kaldı`);
// }

//Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulmayı deneyelim.
let rs = Math.floor(Math.random() * 10 + 1);
let input = prompt("sayı tahmini?");
if (input === rs) {
    console.log(`tebrikler doğru tahmin : ${input}`);
} else {
    console.log("tahmininiz yanlış");
}
//return direkt değişken döndürür. değişkeni kullanır.
//ornek 1
let name = prompt("İsminizi giriniz");

function sayName(name) {
    return name;
}
console.log(sayName(name));

//ornek 2

const yas = function yasSöyle() {
    return prompt("Yaşınızı giriniz");
};

console.log(yas());
//object neden kullanılır
//key-value ilişkisinde array içindeki elemanlara ya isim verip onların değerlerini kullanmak istersek diye

//obje oluşturma ve kullanma
let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish",
};
console.log(countriesTalkSpanish.continent);
console.log(countriesTalkSpanish.language);

//yeni obj

let laptop1 = {
    brand: " Apple",
    model: "Macbook pro",
    price: "$1000",
    //eleman isimlerinin başına rakam eklenecekse tırnak kullanılmalıdır
    "2kg": 2,
    //şeklinde
    model_name: "Pro",
    modelName2: "Pro2",
    //model-name:  bu hatalı kullanım
};
console.log(laptop1);
console.log(laptop1.brand);
console.log(laptop1["2kg"]);
console.log(laptop1.model);
console.log(laptop1.price);
console.log(laptop1.model_name);
console.log(laptop1.modelName2);

//bu bilgilere de console.log(laptop1["brand"]) şeklinde de erişebiliriz

//objenin içindeki değerleri değiştirme

laptop1.brand = "HP";
laptop1["2kg"] = 3;
console.log("değiştirildi", laptop1.brand);
console.log("değiştirildi", laptop1["2kg"]);

//objeye yeni değer ekleme
laptop1.version = "10.15.7";
console.log(laptop1);

//anahtar bilgilerine ulaşmak

anahtar = Object.keys(laptop1);
console.log(anahtar);
//yada
//console.log(Object.keys(laptop1)); şeklinde de bakabiliriz

//anahtar bilgilerine neden ulaşmak isteriz...
//for ile dönmek
// for (const anahtar in laptop1) {
//     console.log(anahtar);
// }
//foreach ile dönmek
anahtar.forEach((item) => {
    console.log(item);
    console.log(laptop1[item]);
    //bu şekilde hem key hem value değerlerine bakılabilir
});

//valueleri almak
console.log(Object.values(laptop1));
//sadece değerlerin olduğu bir listeye ulaştık

let deger = Object.values(laptop1);
deger.forEach((info) => {
    console.log("value: ", info);
});
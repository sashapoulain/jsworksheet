//localstorage ile çalışma orneği 1
let d = document.querySelector("#deneme");
let users = {
    name: "Şeyma Yılmaz",
    mail: "sashapoulain5@gmail.com",
    isActive: true,
};
localStorage.setItem("user", JSON.stringify(users)); //bilgiyi yerleştir
//localStorage.setItem("user", JSON.stringify(users)); buradaki user ile  let uInfo = localStorage.getItem("user");  buradaki user aynı
let uInfo = localStorage.getItem("user"); //bilgiyi oku
uInfo = JSON.parse(uInfo); //json formatına çevir
d.innerHTML = uInfo.name; //html e yazdır
console.log(uInfo);

//local storage ile çalışma orneği 2
let d2 = document.querySelector("#deneme2");
//obje oluştur
let kisi = {
    isim: "mert",
    hobby: "basketbol",
    yas: 25,
};
//local storage e yazdır
//html e yazdır
// localStorage.setItem("person", JSON.stringify(kisi));
// let person = localStorage.getItem("person");
// person = JSON.parse(person);
// d2.innerHTML = person.isim;
localStorage.setItem("person", JSON.stringify(kisi));
let person = JSON.parse(localStorage.getItem("person"));
d2.innerHTML = person.isim;
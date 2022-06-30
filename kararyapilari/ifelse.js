//eğer kullanıcı bilgisi varsa ekrana yazdır veya console a yazdır
// let userName = prompt("Kullanıcı Adınızı Giriniz");
// if (userName.length > 0) {
//     //if kısmı her zaman true olduğunda çalışır.
//     console.log(`Merhaba ${userName}`);
// } else {
//     console.log(`lütfen bir username belirtin`);
// }

//çoklu if
let username = prompt("Kullanıcı Adınızı Giriniz");
let age = prompt("Yaşınızı Giriniz");
let info = document.querySelector("#info");
if (username > 0 && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz";
} else if (username === "" && age === "") {
    info.innerHTML = "lütfen kullanıcı adınızı ve yaşınızı giriniz";
} else if (!username) {
    info.innerHTML = "kullanıcı adınızı giriniz";
} else if (!age) {
    info.innerHTML = "yaşınızı giriniz";
} else if (age < 18) {
    info.innerHTML = "18 yaşından küçük olduğunuz için ehliyet alamazsınız";
}
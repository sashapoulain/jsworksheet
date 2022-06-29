//eğer kullanıcı bilgisi varsa ekrana yazdır veya console a yazdır
let userName = prompt("Kullanıcı Adınızı Giriniz");
if (userName.length > 0) {
    //if kısmı her zaman true olduğunda çalışır.
    console.log(`Merhaba ${userName}`);
} else {
    console.log(`lütfen bir username belirtin`);
}
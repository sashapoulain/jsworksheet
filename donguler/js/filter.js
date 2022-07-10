const products = [
    "Mic",
    "Cable",
    "Speaker",
    "Desktop PC",
    "Server",
    "Mouse",
    "Keyboard",
];

const users = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
];

//filter kullanımı
//filter tekrar liste döndürür
//5 harften fazla olanları

//mesela products içinde 5 harften fazla olan ürünleri bulmak istiyorum
let newPro = products.filter((item) => item.length > 5);
console.log("5 ten büyük => ", newPro);
let p = products.filter((index) => index.length > 6);
console.log("6 dan büyük => ", p);

//users içinde aktif kullanıcıları yazdır
//3 farklı şekilde yazılabilir
let activeUsers = users.filter((user) => user.isActive);
// let activeUsers = users.filter((user) => user.isActive === true);
//let activeUsers = users.filter((user) => user.isActive !== false);

console.log("Aktif kullanıcılar => ", activeUsers);

//----------------------------------------------------------------------------------------------------------------------
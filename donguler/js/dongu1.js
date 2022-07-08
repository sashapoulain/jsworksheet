let uList = document.querySelector("#userList");
let users = ["Lorem", "Ipsum", "Dolor"];

// //for döngüsü
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// //değişkeni dışarıda da veririz.
// //; kullanılmalı şart yani
let index = 0;
for (; index < 10; index++) {
    console.log(index);
}

// //users' ı for ile dolaşmak
// //for u oluşturup içine normal dom manipulation kodlarını yazıyoruz.
for (u = 0; u < users.length; u++) {
    let li = document.createElement("li");
    li.innerHTML = users[u];
    uList.appendChild(li);
    //  console.log(users[u]);
}
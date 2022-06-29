//id ile element seçme
let title = document.getElementById("title");
console.log(title);
//title içindeki html ulaşımı
console.log(title.innerHTML);
//title içindeki html değiştirme
title.innerHTML = "Merhaba Şeyma";
//querySelector ile element seçme
let link = document.querySelector("ul#list>li>a");
console.log(link);
console.log(link.innerHTML);
//yada
link.innerText = "değiştirildi";
//querySelectorAll ile tüm elementleri seçebiliriz.
//querySelector ilk elementi seçer. spesifik element için
//let link = document.querySelector("a")[1]; şeklinde seçebiliriz.
//yada a'nın id si varsa
//let link = document.querySelector("#anınidsi");
//yada a'nın class si varsa
//let link = document.querySelector(".anınclasssi");
//linkin style'ını değiştirme
link.style.color = "red";
//linke class ekleme
link.className = "linkclass2";
//2.yol
link.classList.add("linkclass");
console.log(link);
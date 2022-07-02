//list eleman seçimi
let lastListItem = document.querySelector("ul#list>li:last-child");
console.log(lastListItem);
lastListItem.innerHTML = "Last Item";
let firstListItem = document.querySelector("ul#list>li:first-child");
console.log(firstListItem);
firstListItem.innerHTML = "First Item";

// //ayrıca last item şu şekilde de seçilebilir.
// let lastListItem = document.querySelectorAll("li")[2];
// console.log(lastListItem);
// lastListItem.innerHTML = "Last Item";
// //firstitem de şu şekilde seçilebilir.
// let firstListItem = document.querySelectorAll("li")[0];
// console.log(firstListItem);
// firstListItem.innerHTML = "First Item";
// //yada ortadakini seçimi için...
// let middleListItem = document.querySelectorAll("li")[1];
// console.log(middleListItem);
// middleListItem.innerHTML = "Middle Item";

//ELEMENT OLUŞTURMA

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "New Item";
//elementi sona eklemek için appendChild kullanılır.
// ulDOM.appendChild(liDOM);
//elementi başa ekleme
// ulDOM.insertBefore(liDOM, ulDOM.firstChild);
//elementi başa eklemek için insertBefore ve prepend kullanılır.
ulDOM.prepend(liDOM);
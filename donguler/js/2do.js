//for döngüsü bir takım sayı kadar dönmesi için kullanılır.

let loremList = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "elit",
];

//break
//break 'den sonrasını alma

let counter = 0;
for (; counter < 10; counter++) {
    //  console.log(counter); //0 1 2 3 4 5
    if (counter === 5) {
        break;
    }
    console.log(counter); // 0 1 2 3 4
}

//----------------------------------------------------------------------------------------------------------------------
console.log(
    "----------------------------------------------------------------------------------------------------------------------"
);
//----------------------------------------------------------------------------------------------------------------------
//continue
//continue 'da o kısmı atlar

let say = 0;
for (; say < 10; say++) {
    if (say === 5) {
        continue;
    }
    console.log(say); //0 1 2 3 4 6 7 8 9
}

//----------------------------------------------------------------------------------------------------------------------
//break ve document kullanımı
// let ul = document.querySelector("#userList");
// let index = 0;
// for (; index < loremList.length; index++) {
//     if (loremList[index] === "dolor") {
//         break;
//     }
//     let li = document.createElement("li");
//     li.innerText = loremList[index];
//     ul.appendChild(li);
// }
//continue ve document kullanımı
let ul = document.querySelector("#userList");
let index = 0;
for (; index < loremList.length; index++) {
    if (loremList[index] === "dolor") {
        continue;
    }
    let li = document.createElement("li");
    li.innerText = loremList[index];
    ul.appendChild(li);
}
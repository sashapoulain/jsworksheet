let items = [1, 2, 3, 4, 5, 1, 4, 9, 16, 25];
let femaleUsers = ["şeyma", "asiye", "mihri", "süt"];
let maleUsers = ["sıtkı", "mert", "ahmet"];
//dizi içinden belirli kısımları almak: splice
//splice da başlangıç ve bitiş değerlerinin her ikiside alınır.

let newArr = items.splice(5, 9);
console.log(newArr);
//sonuç: [ 1, 4, 9, 16, 25 ]
let dizi = [3, 6, 9, 12, 15, 18, 21];
let newArr2 = dizi.splice(2, 4);
console.log(newArr2);
//2.index ile almaya başla ve 2.indexten sonra 4 tane daha al sonra dur.
let dizi2 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
let newArr3 = dizi2.splice(5, 2);
console.log(newArr3);

//--------------------------------------------------------------------------------------------------------------------
//array içindeki elemanın index bilgisini bulmak
let items2 = [10, 20, 30];
items2.unshift("lorem");
items2.push("ipsum");
console.log(items2);
//ipsum nerede?
console.log(items2.indexOf("ipsum"));
//lorem nerede?
console.log(items2.indexOf("lorem"));
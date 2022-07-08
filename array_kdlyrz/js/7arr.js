//slice
//slice => dilimle
//başlangıç değeri dahil, bitiş değeri dahil değil al.
let list = ["elma", "süt", "ekmek", "limon", "cay", "şeker", "tuz", "çikolata"];
let listSl = list.slice(2, 4);
console.log(listSl);
//"ekmek", "limon"
let listSp = list.splice(2, 4);
console.log(listSp);
//"ekmek", "limon", "cay", "şeker"
//splice => ekle

//--------------------------------------------------------------------------------------------------------------------
const alisverisList = ["elma", "ekmek", "süt"];
const newList = alisverisList.slice(0, 2);
console.log(newList);
//["elma", "ekmek"]
console.log(...newList);
//"elma", "ekmek"

//--------------------------------------------------------------------------------------------------------------------

//diziyi kopyalama işlemi
const n = [...alisverisList];
console.log(n);
//["elma", "ekmek", "süt"]

//--------------------------------------------------------------------------------------------------------------------
//dizileri birleştirme
let k = ["şeyma", "hande", "asiye", "süt"];
let e = ["sıtkı", "mert", "ali"];
let addThmTgthr = [...k, ...e];
console.log(addThmTgthr);
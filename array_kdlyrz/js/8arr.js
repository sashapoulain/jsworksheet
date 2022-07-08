//diziyi stringe çevirme
//1.yol
//toString()
let e = ["sıtkı", "mert", "ali"];
let strng = e.toString();
console.log(strng);
//sıtkı,mert,ali
//2.yol
//join()
let k = ["şeyma", "hande", "asiye", "süt"];
let j = k.join("---");
console.log(j);
//şeyma---hande---asiye---süt

//--------------------------------------------------------------------------------------------------------------------
//istenilen yere başka bir eleman eklemek

let t = ["edward", "bella", "jacob", "alice", "jasper", "emmet"];
//sondan bir öncesine rose ekle
t.splice(t.length - 1, 0, "rose");
//t.length -1 => sondan bir önceki elemanın indexi, 0 => parçalamadan ekle, rose => eklenecek eleman
console.log(t);
//ortaya carlisle ekle
t.splice(Math.floor(t.length / 2), 0, "carlisle");
console.log(t);

//3 den sonra 'esme' ekle
let t2 = ["edward", "bella", "jacob", "alice", "jasper", "emmet"];
t2.splice(3, 0, "esme");
console.log(t2);

//NOT => SPLICE 2 DEĞER ALIRSA AYRI BİR DİZİ OLUŞTURUR YADA ... İLE STRING OLUŞTURUR AMA 3 DEĞER ALIRSA EKLEME YAPAR

let d = ["a", "b", "c", "d", "e"];
d.splice(0, 2);
console.log(d);
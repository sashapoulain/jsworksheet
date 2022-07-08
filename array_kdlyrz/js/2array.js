let items = [10, 20, 30, 40];
console.log("items-ilk hali: ", items);

//sona eleman ekleme - push
items.push(50);
console.log("push kullanıldı- 50: ", items);

//başa eleman ekleme - unshift
items.unshift(0);
console.log("unshift kullanıldı- 0: ", items);

//sondan eleman çıkarma - pop
items.pop();
console.log("pop kullanıldı- son eleman çıkarıldı: ", items);
//çıkarılan eleman yakalanabilir...
//ki genelde diziden çıkardığın elemanı bir değişkenle kayıt altına al.
let lastItems = items.pop();
console.log(lastItems, items);

//ilk eleman çıkarma - shift
//items = [0, 10, 20, 30]
items.shift();
console.log("shift kullanıldı- ilk eleman çıkarıldı: ", items);
//shift ile çıkarılan elemanı da yakalayabiliriz
let firstItem = items.shift();
console.log(firstItem, items);
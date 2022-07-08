//array içindeki bilgileri değiştirme
let items = [0, 10, 20, 30, 40];
console.log(items);
//örneğin 0 ı 5 ile değiştirmek için...
items[0] = 5;
console.log(items);

//son elemanı değiştirmek için...
items[items.length - 1] = 100;
console.log(items);
//olmayan bir kısma da ekleme yapılır...
items[30] = 200;
console.log(items);
//sonuç boşlu bi dizi gelir ama
//sonuç: [5, 10, 20, 30, 100, boş × 25, 200]
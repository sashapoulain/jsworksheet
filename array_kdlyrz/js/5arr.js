let items = [1, 2, 3, 4, 5];
let femaleUsers = ["şeyma", "asiye", "mihri", "süt"];
let maleUsers = ["sıtkı", "mert", "ahmet"];

//items ın sonuna diğer 2 diziyi eklemek
// items.push(maleUsers, femaleUsers);
// console.log(items);
//çıktı: [1, 2, 3, 4, 5, Array(3), Array(4)]  => burada eleman sayısı 7
// console.log(items[5][1]);
//çıktı: mert

//--------------------------------------------------------------------------------------------------------------------

items.push(...maleUsers, ...femaleUsers);
console.log(items);
//sonuç: [1, 2, 3, 4, 5, 'sıtkı', 'mert', 'ahmet', 'şeyma', 'asiye', 'mihri', 'süt'] => burada eleman sayısı 12
console.log(items[5][0]);
console.log(items[5].length); // 5 sıtkı 5 harfli //array içinde istenilen elemanın uzunluğunu aldık

//sonuç: s => sıtkının 0. elemanı s dir
//ÜÇ NOKTA VE ÜÇ NOKTA OLMADAN KULLANILAN PUSH DA elemanlara ulaşmak için items[0] veya items[5][1] şeklinde ulaşılabilir.
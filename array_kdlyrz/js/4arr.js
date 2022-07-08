let items = [1, 2, 3, 4, 5];
let femaleUsers = ["şeyma", "asiye", "mihri", "süt"];
let maleUsers = ["sıtkı", "mert", "ahmet"];
//items dizisine maleUsers ve femaleUsers dizisini ekle

//başa ekle
items.unshift(...maleUsers);
console.log(items);
// ... direkt içine ekler tek tek
//çıktı: ['sıtkı', 'mert', 'ahmet', 1, 2, 3, 4, 5]
//üç noktasız unshift ise dizi olarak ekler
items.unshift(maleUsers);
console.log(items);
//çıktı: [Array(3), 1, 2, 3, 4, 5]
//femaleUsers dizisini başa ekle
items.unshift(femaleUsers);
console.log(items);
//splice hem eleman ekleyip hem silebiliriz.
//hayatım splice metoduna benziyo. asdfg

const nameLetters = ["ş", "e", "y", "m", "a"];
// nameLetters.splice(2, 0, "i"); //2.indexe verileni ekle.
//çıktı: ['ş', 'e', 'i', 'y', 'm', 'a']
// nameLetters.splice(2, 1, "i"); //2.indexe verilen indexe göre sil.
//çıktı: ['ş', 'e', 'i', 'm', 'a']
// nameLetters.splice(3, 0, "i");
//çıktı: ['ş', 'e', 'y', 'i', 'm', 'a']
// nameLetters.splice(3, 1, "i");
//çıktı: ['ş', 'e', 'y', 'i', 'a']
// nameLetters.splice(3, 2, "i");
//çıktı: ['ş', 'e', 'y', 'i']
// console.log(nameLetters);
// const sentence = ["ben", "şu", "an", "js", "çalışıyorum"];
// console.log(sentence);
// sentence.splice(0, 4, "JavaScript");
// console.log(sentence);
// const arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// console.log(arr);
let numbers = ["sıfır", "bir", "iki", "üç", "dört", "beş"];
// numbers.splice(3);
//['sıfır', 'bir', 'iki']
// numbers.splice(2, 4);
// console.log(numbers);
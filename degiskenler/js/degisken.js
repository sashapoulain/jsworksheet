//degisken tanimlama
let firstName = "şeyma yılmaz";
console.log(firstName);

//aynı degiskene baska deger verilebilir
firstName = "mert korkmaz";
console.log(firstName);

//yeni değer de eklenebilir

firstName = firstName + " yılmaz";
console.log(firstName);

// yada şu şekilde de eklenir.
let secName = "aslan";
secName += " kaplan";
console.log(secName);

//const ile undefined bir değişken tanımlanmaz.
//örnek
//const password; //bu hata verir.

//doğru olan
const password = "123456";
console.log(password);
//const ile aynı değişkeni 2.kez tanımlayamazsın.
//const password = "234"; //yanlış bu da hata verir

//değişkeni bir arttırma işlemi
counter = 0;
counter++;
console.log(counter);

// counter = 0;
// counter += 1;
// console.log(counter); // 1

//değişkeni bir azaltma işlemi
counter = 10;
counter--;
console.log(counter);

//2.yöntem
count = 3;
count = count + 1;
console.log(count);

//3.yöntem

say = 5;
say += 1;
console.log(say);

//birden fazla da artırılıp azaltılabilir
sayi = 10;
sayi += 10;
console.log(sayi);

//degiskenler çarpıladabilir.

carp = 20;
carp *= 2;
console.log(carp);

//degiskenler bölünedebilir.

bol = 10;
bol /= 5;
console.log(bol);
//while döngüsü => sonsuza kadar döner müdahale edilmezse.

let counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
    //0 1 2 3 4 5 6 7 8 9
}

//kullanıcı adını girene kadar while dönsün ad gelince onu yazsın

//----------------------------------------------------------------------------------------------------------------------
//önce boş bir userName tanımlıyoruz.
let userName;
while (!userName) {
    userName = prompt("Kullanıcı adını giriniz");
    console.log(userName);
}
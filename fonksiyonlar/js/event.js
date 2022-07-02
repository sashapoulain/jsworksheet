let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", function tıkla() {
    console.log("Tıklandı");
});
//yukarıdaki event sayesinde greetinge her tıklandığında console.log("Tıklandı") yazacak.

let greeting2 = document.querySelector("#greeting2");
greeting2.addEventListener("click", tikla);

function tikla() {
    console.log("Tıklandı2");
    console.log(this);
    // console.log(this); ile fonksiyonun nerede çalışıyor olduğunu görebiliriz.
    console.log(this.id); //bu şekilde id'yi görebiliriz.
    console.log(this.className); //bu şekilde class'ı görebiliriz. ama bu senaryoda class yok.
    console.log(this.innerHTML); //bu şekilde innerHTML'i görebiliriz.
    console.log((this.innerHTML = "Merhaba")); //bu şekilde innerHTML'i değiştirebiliriz.
    console.log((this.style.color = "red")); //bu şekilde style'ı değiştirebiliriz.
    //bunları console dışında da yapabiliriz
    this.style.fontSize = "40px"; //bu şekilde style'ı değiştirebiliriz.
}
//ilk fonksiyon

function helloWorld() {
    console.log("hello world");
}

//iç içe fonksiyonlar
function hello() {
    console.log("hello");
    helloWorld();
}

//hello() fonksiyonunu kaç kez çağırırsan o kadar çalışır.
// hello();
// hello();
hello();
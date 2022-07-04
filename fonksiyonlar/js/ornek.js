//2.yol
//burada artık sayac 0 a değil localstorage içinde okunacak bilgiye eşit olucak
// let sayac = 0;
let sayac = JSON.parse(localStorage.getItem("sayac")) ?
    Number(JSON.parse(localStorage.getItem("sayac"))) :
    0;
let counterDom = document.querySelector("#counter");
let increaseDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");
counterDom.innerHTML = sayac;

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);

function clickEvent() {
    if (this.id === "increase") {
        sayac++;
    } else {
        sayac--;
    }
    localStorage.setItem("sayac", sayac);
    counterDom.innerHTML = sayac;
}
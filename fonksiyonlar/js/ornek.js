let artirBtn = document.querySelector("#increase");
let azaltBtn = document.querySelector("#decrease");
let counter = document.querySelector("#counter");
artirBtn.addEventListener("click", arttir);
azaltBtn.addEventListener("click", azalt);

function arttir() {
    counter.innerHTML++;
}

function azalt() {
    counter.innerHTML--;
}
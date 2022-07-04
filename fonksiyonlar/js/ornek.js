let artirBtn = document.querySelector("#increase");
let azaltBtn = document.querySelector("#decrease");
let counter = document.querySelector("#counter");
artirBtn.addEventListener("click", arttir);
azaltBtn.addEventListener("click", azalt);

function arttir() {
    counter.innerHTML++;
    // console.log(counter.innerHTML);
    /*
      localStorage.setItem("counter", JSON.stringify(counter.innerHTML));
      let c = JSON.parse(localStorage.getItem("counter"));
      console.log(c);
      mesela bu locale kaydediyor ama son veriyi kaydediyor.
      */
}

function azalt() {
    counter.innerHTML--;
    // console.log(counter.innerHTML);
}
let form = document.querySelector("#userForm");
let inpscore = document.querySelector("#score");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    let data = inpscore.value.trim();
    console.log(data);
    inpscore.value = "";
    localStorage.setItem("s", JSON.stringify(data));
    //s = keydir. istediğin ismi verebilirsin. data ise inputtan alınan değerdir.
    e.preventDefault();
    //  console.log("Form submitted");
}
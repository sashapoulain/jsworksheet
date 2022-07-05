let userForm = document.querySelector("#userForm");
const alertDom = document.querySelector("#alert");
userForm.addEventListener("submit", formHandler);

const alert = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title} </strong>${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function formHandler(e) {
    e.preventDefault();
    const userName = document.querySelector("#username");
    const score = document.querySelector("#score");
    if (score.value > 100 || score.value < 0) {
        alertDom.innerHTML = alert(
            "Ayy!",
            "Notunu yanlış girmiş olmalısın",
            "danger"
        );
    } else {
        if (userName.value && score.value) {
            addItem(userName.value, score.value);
            userName.value = "";
            score.value = "";
        } else {
            alertDom.innerHTML = alert(
                "Oops!",
                "Lütfen boş alan bırakmayınız",
                "danger"
            );
        }
    }
}

let userList = document.querySelector("#userList");

const addItem = (userName, score) => {
    let liDom = document.createElement("li");
    liDom.innerHTML = `${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>`;
    userList.appendChild(liDom);
    liDom.className = `list-group-item d-flex justify-content-between align-items-center`;
};
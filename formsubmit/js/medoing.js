// let form = document.querySelector("#userForm");
// let userName = document.querySelector("#username");
// let not = document.querySelector("#score");
// let uList = document.querySelector("#userList");

// form.addEventListener("submit", formHandler);

// function formHandler(e) {
//     e.preventDefault();
//     let newName = userName.value;
//     let newNot = not.value;
//     console.log(newName);
//     console.log(newNot);
//     let user = {
//         name: newName,
//         score: newNot,
//     };
//     if (newName == "" || newNot == "") {
//         alert("Lütfen boş alan bırakmayınız");
//         let user = [];
//     } else {
//         const li = document.createElement("li");
//         li.className = `list-group-item d-flex justify-content-between align-items-center`;
//         const span = document.createElement("span");
//         span.innerHTML = newNot;
//         span.className = `badge badge-primary badge-pill`;
//         li.innerHTML = `${newName} ${span.outerHTML}`;
//         uList.appendChild(li);
//         userName.value = "";
//         not.value = "";
//         let user = {
//             name: newName,
//             score: newNot,
//         };
//         localStorage.setItem(newName, JSON.stringify(user));
//         let userList = JSON.parse(localStorage.getItem(newName));
//         console.log(userList);
//     }
// }
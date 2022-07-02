let puan = prompt("Notunuzu giriniz!");
let info = document.querySelector("#info");

const smile = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`;
const sad = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`;
if (puan >= 90 && puan <= 100) {
    info.innerHTML = `AA ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 85 && puan <= 89) {
    info.innerHTML = `BA ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 80 && puan <= 84) {
    info.innerHTML = `BB ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 75 && puan <= 79) {
    info.innerHTML = `CB ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 70 && puan <= 74) {
    info.innerHTML = `CC ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 65 && puan <= 69) {
    info.innerHTML = `DC ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 60 && puan <= 64) {
    info.innerHTML = `DD ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 50 && puan <= 59) {
    info.innerHTML = `FD ${smile}`;
    info.classList.add("textPrimary");
} else if (puan >= 0 && puan <= 49) {
    info.innerHTML = `FF ${sad}`;
    info.classList.add("textDanger");
} else {
    info.innerHTML = `Yanlış bir şey yaptınız! ${sad}`;
}
document.addEventListener("DOMContentLoaded", function () {
    // Liste des pages valides
    const validPages = [
        "/404",
        "/",
        "/catalog-eng",
        "/catalog-es",
        "/catalog-fr",
        "/confirmation",
        "/confirmation-eng",
        "/confirmation-es",
        "/eng",
        "/es",
        "/login",
        "/login-eng",
        "/login-es"
    ];

    // Récupération du chemin de l'URL actuelle
    const currentPath = window.location.pathname;

    // Si le chemin actuel n'est pas dans la liste des pages valides, redirige vers /404
    if (!validPages.includes(currentPath)) {
        window.location.href = "/404";
    }
});





console.log("Hello 🌎");


const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}



let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});



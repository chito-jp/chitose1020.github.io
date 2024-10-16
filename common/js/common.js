const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "common/css/defer.css";
document.head.appendChild(stylesheet);
const header = document.createElement("header");
header.innerHTML = `<a href="/">Home</a><div class="hamburger"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>`;
document.body.appendChild(header);
const hamburger = document.querySelector("header .hamburger");
console.log(hamburger);
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
});
const main = document.createElement("main");
document.body.appendChild(main);

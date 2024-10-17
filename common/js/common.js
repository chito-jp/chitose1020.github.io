const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "common/css/defer.css";
document.head.appendChild(stylesheet);
const header = document.createElement("header");
header.innerHTML = `<a href="/">Home</a><div class="hamburger"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><div class="menu"><ul><li><a href="/">Home</a></li><li><a href="/article">article</a></li></ul></div>`;
document.body.appendChild(header);
const hamburger = document.querySelector("header .hamburger");
const hamburgerMenu = document.querySelector("header .menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");
});
const main = document.createElement("main");
document.body.appendChild(main);
main.innerHTML = ``;
const footer = document.createElement("footer");
document.body.appendChild(footer);
footer.innerHTML = ``;
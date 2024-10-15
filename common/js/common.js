const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "common/css/defer.css";
document.head.appendChild(stylesheet);
const header = document.createElement("header");
header.innerHTML = `<h1><a href="/">Home<a></h1><div class="hamburger"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div>`;
document.body.appendChild(header);
const main = document.createElement("main");
document.body.appendChild(main);

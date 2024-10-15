const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "common/css/defer.css";
document.head.appendChild(stylesheet);
const header = document.createElement("header");
header.innerHTML = `<a src="/"><h1>Home</h1></a><div>🍔<div>`;
document.body.appendChild(header);
const main = document.createElement("main");
document.body.appendChild(main);

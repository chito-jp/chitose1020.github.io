const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "/common/css/common.css";
document.head.appendChild(stylesheet);
const header = document.createElement("header");
header.innerHTML = `<div><h1>Home</h1></div><div>🍔<div>`;
document.body.appendChild(header);
const main = document.createElement("main");
document.body.appendChild(main);

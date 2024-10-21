const loadElement = async (selector, file) => {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`${selector} was not found.`);
    return;
  }

  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to load ${file}: ${response.status} ${response.statusText}`);
    }
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${file}: ${error.message}`);
  }
};

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "public/css/defer.css";
document.head.appendChild(stylesheet);
loadElement("header", "pub/html/header.html")
.then(() => {
  const hamburger = document.querySelector("header .hamburger");
  const hamburgerMenu = document.querySelector("header .menu");
  if (hamburger && hamburgerMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      hamburgerMenu.classList.toggle("open");
    });
  }else{
    console.warn("要素が見つかりません");
  }
});
loadElement("footer", "common/html/footer.html")
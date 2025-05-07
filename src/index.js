import "../src/main-style.css"
import loadHome from "./pages/home.js"
import loadMenu from "./pages/menu.js"
import loadAbout from "./pages/about.js"

const Home = document.querySelector(".home");
const Menu = document.querySelector(".menu");
const About = document.querySelector(".about");
const Content = document.querySelector(".content");

function init(){
  Content.innerHTML = "";
  loadHome();
}

Home.addEventListener("click", () => {
  Content.innerHTML = "";
  loadHome();
});

Menu.addEventListener("click", () => {
  Content.innerHTML = "";
  loadMenu();
});

About.addEventListener("click", () => {
  Content.innerHTML = "";
  loadAbout();
})

init();
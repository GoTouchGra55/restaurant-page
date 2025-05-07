import "../pages/home.css"

export default function home() {
  const Content = document.querySelector(".content");
  Content.innerHTML = `
    <div class="hm">
      <h2>This is the home page.</h2>
    </div>
  `;
}
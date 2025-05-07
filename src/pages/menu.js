import "../pages/menu.css"

export default function menu(){
  const Content = document.querySelector(".content");
  Content.innerHTML = `
    <div class="mn">
      <h2>This is the menu page.</h2>
    </div>
  `;
}
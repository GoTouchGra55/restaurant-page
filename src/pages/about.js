import "../pages/about.css"

export default function about(){
  const Content = document.querySelector(".content");
  Content.innerHTML = `
    <div class="abt">
      <h2>This is the about page.</h2>
    </div>
  `;
}
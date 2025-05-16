async function loadComponent(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "TemplatedElements/Header.html");
  loadComponent("footer-placeholder", "TemplatedElements/Footer.html");
  loadComponent("Navigation-Menu-Bar", )
});
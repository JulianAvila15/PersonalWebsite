async function loadComponent(id, file) {
  const res = await fetch(file);  
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}

function loadCSS(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  console.log('Created link element:', link);
  document.head.appendChild(link);
}
window.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "TemplatedElements/Header.html");
  loadComponent("footer-placeholder", "TemplatedElements/Footer.html");
  loadComponent("Navigation-Menu-Bar", "TemplatedElements/NavigationMenu.html");
    loadCSS("TemplatedElements/NavigationMenu.css");
});
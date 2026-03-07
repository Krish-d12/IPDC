const menu = document.querySelector(".menu");
const navbarCollapsed = document.querySelector(".navbar-collapsed");

let collapsed = true;

menu.addEventListener("click", () => {
  if (collapsed == true) {
    menu.classList.add("show");
    navbarCollapsed.style.right = "0";
    collapsed = false;
  } else {
    menu.classList.remove("show");
    navbarCollapsed.style.right = "-100%";
    collapsed = true;
  }
});

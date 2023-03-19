const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

const toggleMenu = () => {
  document.body.classList.toggle("active");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
};
menuBtn.onclick = () => {
  toggleMenu();
};

menu.onclick = (e) => {
  if (e.currentTarget === e.srcElement) {
    toggleMenu();
  }
};

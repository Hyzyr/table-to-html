const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

const toggleMenu = () => {
  document.body.classList.toggle("active");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
};
menuBtn.onclick = () => toggleMenu();
menu.onclick = (e) => {
  if (e.currentTarget === e.srcElement) {
    toggleMenu();
  }
};

// const popup = document.getElementById("popup");
// const popupBtn = document.getElementById("popupBtn");
// const popupClose = document.getElementById("popupClose");

// const togglePopup = () => {
//   document.body.classList.toggle("active");
//   popup.classList.toggle("active");
//   popupBtn.classList.toggle("active");
// };
// popupBtn.onclick = () => togglePopup();
// popupClose.onclick = () => togglePopup();
// popup.onclick = (e) => {
//   if (e.currentTarget === e.srcElement) {
//     togglePopup();
//   }
// };

// Находим выпадающее меню
let dropdown = document.querySelector('.nav-dropdown');
// Находим кнопку открытия меню
let openDropdown = document.querySelector('.nav-dropdown-button');

// Открыть-закрыть меню
openDropdown.onclick = function () {
  dropdown.classList.toggle('nav-dropdown-open')
};

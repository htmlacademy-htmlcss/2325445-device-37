// Находим поповер
let popover = document.querySelector('.popover-cart');
// Находим кнопку открытия поповера
let openPopover = document.querySelector('.user-menu-link-cart');

// Открыть-закрыть поповер
openPopover.onclick = function () {
  console.log('click')
  popover.classList.toggle('popover-open')
};

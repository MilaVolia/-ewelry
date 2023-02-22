let filterButtons = document.querySelectorAll('.range__btn');
let filterItems = document.querySelectorAll('.range__item');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    let filter = button.getAttribute('data-filter');

    filterItems.forEach(function (item) {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

const body = document.querySelector('body');

function handleClick() {
  menuBtn.classList.contains('active')
    ? (body.style.overflow = 'hidden')
    : (body.style.overflow = 'visible');
}
const divs = document.querySelector('.menu-btn');

divs.addEventListener('click', handleClick);

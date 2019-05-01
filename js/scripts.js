// VARS
const mobileNavBtn = document.querySelector('.nav__mobile-btn');
const mobileNavItems = document.querySelector('.nav__mobile-items');
const mobileNavItem = document.querySelectorAll('.nav__mobile-items--item');

// LISTENERS
window.addEventListener('scroll', (e) => mobileNavItems.style.visibility = "hidden");

mobileNavBtn.addEventListener('click', (e) => mobileNavItems.style.visibility = "visible");

mobileNavItem.forEach(item => {
    item.addEventListener('click', e =>  alert('No path added yet :) Scroll to exit nav'));
});
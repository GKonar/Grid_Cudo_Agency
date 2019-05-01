// VARS
const mobileNavBtn = document.querySelector('.nav__mobile-btn');
const mobileNavItems = document.querySelector('.nav__mobile-items');

// LISTENERS
window.addEventListener('scroll', (e) => {
    mobileNavItems.style.visibility = "hidden";
});

mobileNavBtn.addEventListener('click', (e) => {
    mobileNavItems.style.visibility = "visible";
});

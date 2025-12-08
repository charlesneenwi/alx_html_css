// Select hamburger icon and nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav ul');

// Toggle 'show' class on click
hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

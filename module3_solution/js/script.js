function toggleMenu() {
  var navList = document.querySelector('.nav-list');
  navList.classList.toggle('show');
}

// Event listener for the menu toggle button
var menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

// Customize the appearance of the menu toggle icon
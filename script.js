document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  });


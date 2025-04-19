document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-output', {
      strings: ["AI-Powered Solutions for Digital Growth ",],
      typeSpeed: 60,
      backSpeed: 60,
      loop: false
    });
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('open');
  }
  

  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Hides the preloader
  });
  
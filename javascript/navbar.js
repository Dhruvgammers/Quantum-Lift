const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('white-bg');
  } else {
    navbar.classList.remove('white-bg');
  }
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const closeButton = document.getElementById('close-button');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuContainer.classList.add('active');
});

closeButton.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('active');
});

window.addEventListener("load", function() {
  const navbar = document.getElementById("navbar");
  navbar.classList.add("show");
});

  function showContactPopup() {
    document.getElementById("contact-popup").classList.remove("hidden");
  }

  function hideContactPopup() {
    document.getElementById("contact-popup").classList.add("hidden");
  }
  
 // Scroll to section when clicking on a navbar link
 
 
 const navbarLinks = document.querySelectorAll('.navbar-links a');

 navbarLinks.forEach(link => {
   link.addEventListener('click', (event) => {
     navbarLinks.forEach(navlink => {
       navlink.classList.remove('active');
     });
     link.classList.add('active');
 
     event.preventDefault();
 
     const target = document.querySelector(link.getAttribute('href'));
     if (target) {
       window.scrollTo({
         top: target.offsetTop,
         behavior: 'smooth'
       });
     }
   });
 });
 

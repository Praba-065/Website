$(document).ready(function(){
// Hero-slider
$('#hero-slider').owlCarousel({
    loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
    }
})
})
/*ACTIVE NAVBAR */
window.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop(); // Get current page name
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
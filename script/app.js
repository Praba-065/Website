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
  
	var carouselEle = $(".carousel-inner>.item>img");
	var carouselEleLength = carouselEle.length;
	if(carouselEleLength > 0) {
		for(var i = 0; i < carouselEleLength; i++) {
			$(carouselEle[i]).css({
				'opacity': '0',
			});
			var imgurl = $(carouselEle[i]).attr("src");
			$(carouselEle[i]).parent().css({
				"background": "url(" + imgurl + ") center center no-repeat",
				"background-size": "cover"
			});
		}
	}
	/*
	Popup image
	*/
	var zoom_imageEle = $(".zoom_image");
	var zoom_imageEleLength = zoom_imageEle.length;
	if(zoom_imageEleLength > 0) {
		for(var i = 0; i < zoom_imageEleLength; i++) {
			$(zoom_imageEle[i]).magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				image: {
					verticalFit: true
				}
			});
		}
	}
	/*
	counter text
	*/
	var counterEle = $(".counter");
	var counterEleLength = zoom_imageEle.length;
	if(counterEleLength > 0) {
		for(var i = 0; i < counterEleLength; i++) {
			$(counterEle[i]).counterUp({
				delay: 10,
				time: 3000
			});
		}
	}
	$('.tweet').twittie({
		dateFormat: '%B %d, %Y',
		template: '{{tweet}} <span class="time">{{date}}</span>',
		count: 5,
		loadingText: 'Loading!'
	});
	/*
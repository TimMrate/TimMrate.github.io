

$( document ).ready(function() {
  var menu = $('.menu');
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      // Do something else, like open/close menu
      menu.toggleClass('active-menu');
    });
    // Owl carousel
    var owl1 = $("#review-slider");
      owl1.owlCarousel({
        center: true,
        
        nav: true,
        navText: ['<span class="prev"><img src="img/left.png" alt="prev" srcset=""></span>','<span class="next"><img src="img/right.png" alt="next" srcset=""></span>'],
        smartSpeed: 800,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:1
          },
          1180:{
            items: 1,
          },
          1660:{
            items: 2,
            margin: 40,
          }
        }
      });
    
});
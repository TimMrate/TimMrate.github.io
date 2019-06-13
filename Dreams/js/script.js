$( document ).ready(function() {
    // Menu
    var menu = $('#hmenu'),
        hamburger = $('.hamburger');
    hamburger.on("click", function(e) {
    hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
        menu.toggleClass('active-menu');
      });
    // Owl carousel
    var owl = $('');
      owl.owlCarousel({
        
      });
  });
$( document ).ready(function() {
    // NiceScroll
      $("body").niceScroll({
       
      });
    // Menu
    var menu = $(' '),
        hamburger = $('');
    hamburger.on("click", function(e) {
    hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
        menu.toggleClass('');
      });
      // Owl carousel
      var owl = $('');
        owl.owlCarousel({

        });
  });
$( document ).ready(function() {
    // Menu
    var menu = $('#hmenu'),
        hamburger = $('.hamburger');
    hamburger.on("click", function(e) {
    hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
        menu.toggleClass('active-menu');
        $('html').toggleClass('overflow');
      });
      // Tabs
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      // Owl carousel
      var owl = $('');
        owl.owlCarousel({
          
        });
  });
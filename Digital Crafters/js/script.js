

$( document ).ready(function() {
  var menu = $('.menu');
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      menu.toggleClass('active-menu')
      // Do something else, like open/close menu
    });
});
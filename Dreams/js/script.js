$(document).ready(function() {
  // Menu
  var menu = $("#hmenu"),
    hamburger = $(".hamburger");
  hamburger.on("click", function(e) {
    hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    menu.toggleClass("active-menu");
    $("html").toggleClass("overflow");
  });
  // Tabs
  $("ul.tabs__caption").on("click", "li:not(.active)", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs")
      .find("div.tabs__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  // Owl carousel
  var owl = $("#places");
  owl.owlCarousel({
    startPosition: 3,
    responsive:{
      0:{
        items:1,
      },
      768:{
        items:1,
      },
      1180:{
        items: 2,
      },
      1660:{
        items: 3,
      }
    }
  });
  // Якорные ссылки
  $(".link").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 2000);
});
$(".link-menu").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 2000);
  menu.toggleClass('active-menu');
  $hamburger.toggleClass("is-active");
});
});

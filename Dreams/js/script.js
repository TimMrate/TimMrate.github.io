$(document).ready(function() {
    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            $(this)
                .addClass("animated " + animationName)
                .one(animationEnd, function() {
                    $(this).removeClass("animated " + animationName);
                });
        }
    });
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
    var owl_1 = $("#places");
    var owl_2 = $("#switzerland-slider");
    var owl_3 = $('#destinations-slider');
    var owl_4 = $('#holiday-slider');
    owl_1.owlCarousel({
        startPosition: 3,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1180: {
                items: 2
            },
            1660: {
                items: 3
            }
        }
    });
    owl_2.owlCarousel({
      items: 1,
      startPosition: 1,
      smartSpeed: 800,
      nav: true,
      navText: ['<span><i class="fas fa-chevron-left"></i></span>',
      '<span><i class="fas fa-chevron-right"></i></span>'],
      dotsContainer: '#dots-2'
  });
  owl_3.owlCarousel({
    // items: 3,
    startPosition: 4,
    smartSpeed: 800,
    center: true,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        575:{
             items: 1
        },
        768: {
            items: 1
        },
        1180: {
            items: 2
        },
        1660: {
            items: 3
        }
    }
});
owl_4.owlCarousel({
    items: 1,
    startPosition: 1,
    smartSpeed: 800,
    nav: true,
    navText: ['<span><i class="fas fa-chevron-left"></i></span>',
    '<span><i class="fas fa-chevron-right"></i></span>'],
    dots: false
});
    // Якорные ссылки
    $(".link").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 2000);
    });
    $(".link-menu").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 2000);
        menu.toggleClass("active-menu");
        $("html").toggleClass("overflow");
        $hamburger.toggleClass("is-active");
    });
});

$(function() {
    // Owl Carousel
    var owl = $("#header-slide");
    owl.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      startPosition: 1,
      touchDrag: false,
      mouseDrag: false,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1300,
    });
    $(".next").click(function(){
      owl.trigger("next.owl.carousel");
    });
    $(".prev").click(function(){
      owl.trigger("prev.owl.carousel");
    });
  });
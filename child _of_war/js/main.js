$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span><i class="fas fa-chevron-left"></i></span>',
            '<span><i class="fas fa-chevron-right"></i></span>'],
        items: 1,
        center: true,
        dots: true,
        margin: 180,
        smartSpeed: 800,
        autoplay: true,
        autoplayHoverPause: true,
    });
    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    $('.parallax-window').parallax({ imageSrc:'../img/prisoners-bg.png'});
});

$(function () {

    //menu fix


    $(window).bind('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('menu_fix');
        } else {
            $('header').removeClass('menu_fix');
        }
    });

    // Smooth Scroll

    $('li>a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });


    // banner slider
$('.banner_slider').slick({
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
});

    // highlights slider

    $('.highlights_slider').slick({
        infinite: true,
        autoplay: false,
        speed: 800,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',

    });


    // highlights slider

    $('.success_slider').slick({
        infinite: true,
        autoplay: false,
        speed: 800,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',

    });

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // scroll top 


    $(".chevron_up").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 1000);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".chevron_up").fadeIn();
        } else {
            $(".chevron_up").fadeOut();
        }
    });

    // Closes responsive menu when a scroll link is clicked


    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


});

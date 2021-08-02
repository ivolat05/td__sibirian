$(function () {
    $('.menu__burger').click((event) => {
        $('.menu__burger').toggleClass('burger__active'),
            $('.menu').toggleClass('menu__active'),
            $('.header__wrapp-inner').toggleClass('header__wrapp-inner__active'),
            $('body').toggleClass('look')
    });

    $(".main__box").mCustomScrollbar({
        axis: "x",
        autoHideScrollbar: true
    });

    $(".insta__wrapp").slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1
    });

    document.addEventListener('touchstart', onTouchStart, {
        passive: true
    });
});
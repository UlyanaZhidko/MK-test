$(function(){

    $('.photo-slider').slick({
        
        prevArrow:'<button type="button" class="slick-prev"><img src="img/left.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/right.svg" alt=""></button>',

        autoplay: false,
        autoplaySpeed: 2000,
    });

    $('.menu-btn').on('click', function() {
        $('.menu-list').slideToggle();
    });
});
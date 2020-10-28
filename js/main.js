$(function () {

    $('.photo-slider').slick({

        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" alt="arrow: prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt="arrow: next"></button>',

        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.main-principles-photo-slider').slick({

        prevArrow: '<button type="button" class="slider-prev"><img src="img/left.svg" alt="arrow: prev"></button>',
        nextArrow: '<button type="button" class="slider-next"><img src="img/right.svg" alt="arrow: next"></button>',

        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.reviews-cards-slider').slick({

        prevArrow: '<button type="button" class="reviews-slick-prev"><img src="img/left.svg" alt="arrow: prev"></button>',
        nextArrow: '<button type="button" class="reviews-slick-next"><img src="img/right.svg" alt="arrow: next"></button>',
        dotsClass: 'slick-dots',

        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    });




});
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

    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  /* скрывать офис в минске */
  $('.footer-item-title-minsk').on('click', function () {
    $('.footer-item-list-minsk, .footer-adress-minsk, .footer-phone-minsk').toggle();
  });
  /* скрывать офис в могилеве */
  $('.footer-item-title-mogilev').on('click', function () {
    $('.footer-adress-mogilev').toggle();
  });
  /* скрывать офис в бресте */
  $('.footer-item-title-brest').on('click', function () {
    $('.footer-adress-brest').toggle();
  });
  /* скрывать офис в витебстке */
  $('.footer-item-title-vitebsk').on('click', function () {
    $('.footer-adress-vitebsk').toggle();
  });
  /* скрывать офис в гродно */
  $('.footer-item-title-grodno').on('click', function () {
    $('.footer-adress-grodno').toggle();
  });
  /* скрывать офис в гомеле */
  $('.footer-item-title-gomel').on('click', function () {
    $('.footer-adress-gomel').toggle();
  });



  //маска для ввода номера телефона
  var elements = document.getElementsByClassName('cooperation-form-input');
  for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
      mask: '+{375}(00)000-00-00',
    });
  }

});
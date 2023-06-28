$(window).scroll(function () {
    var target = $(this).scrollTop();
    if (target > 300) {
        $('.swim').addClass('active');
    } else {
        $('.swim').removeClass('active');
    }
});
$('.header__burg').on('click', function (e) {
    e.preventDefault();
    $('.menu').addClass('active');
    $('.menu').addClass('start');
    setTimeout(function () {
        $('.menu__wrap').addClass('active');
    }, 300);
});
$('.menu__close').on('click', function (e) {
    e.preventDefault();
    $('.menu__wrap').removeClass('active');
    setTimeout(function () {
        $('.menu').removeClass('start');
    }, 500);
    setTimeout(function () {
        $('.menu').removeClass('active');
    }, 800);
});
$('.menu').on('click', function (e) {
    if (!(($(e.target).parents('.menu__wrap').length) || ($(e.target).hasClass('menu__wrap')))) {
        $('body').css("overflow", "visible");
        $('.menu__wrap').removeClass('active');
        setTimeout(function () {
            $('.menu').removeClass('start');
        }, 500);
        setTimeout(function () {
            $('.menu').removeClass('active');
        }, 800);
    }
});
$('.footer__btn, .header__call, .team__block-link, .main__btn, .home-feat__block').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('.overlay-call').addClass('overlay-start');
    setTimeout(function () {
        $('.overlay-call .popup').addClass('active');
    }, 300);
});

$('.overlay-call__close').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call .popup').removeClass('active');
    setTimeout(function () {
        $('.overlay-call').removeClass('overlay-start');
    }, 500);
    setTimeout(function () {
        $('.overlay-call').removeClass('overlay-active');
    }, 800);
});
$('.overlay-gal__close').on('click', function (e) {
    e.preventDefault();
    $('.overlay-gal .popup').removeClass('active');
    setTimeout(function () {
        $('.overlay-gal').removeClass('overlay-start');
    }, 500);
    setTimeout(function () {
        $('.overlay-gal').removeClass('overlay-active');
    }, 800);
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call .popup').removeClass('active');
        setTimeout(function () {
            $('.overlay-call').removeClass('overlay-start');
        }, 500);
        setTimeout(function () {
            $('.overlay-call').removeClass('overlay-active');
        }, 800);
    }
});
$('.overlay-gal').on('click', function (e) {
    if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
        $('body').css("overflow", "visible");
        $('.overlay-gal .popup').removeClass('active');
        setTimeout(function () {
            $('.overlay-gal').removeClass('overlay-start');
        }, 500);
        setTimeout(function () {
            $('.overlay-gal').removeClass('overlay-active');
        }, 800);
    }
});

function noWw(event) {
    if ("1234567890+\(\)\- ".indexOf(event.key) != -1) {
    } else {
        event.preventDefault();
    }
}
if (screen.width >= 1200) {
    // let bg = $('.struct__imgs');
    // let bg2 = $('.trans__bg');
    // let bg3 = $('.history__bg');
    let cl1 = $('.home-about__cloud1');
    let cl2 = $('.home-about__cloud2');
    let cl3 = $('.home-about__cloud3');
    let cl4 = $('.home-about__cloud4');
    let cl5 = $('.home-about__cloud5');
    // let bg3 = $('.programm-top__img img');
    // let bg4 = $('.main__img img');
    // let map = $('.home-map__map');
    // let zekk = $('.zekkert-top__img img');
    window.addEventListener('scroll', function (e) {
        let x = e.clientX / window.innerWidth;
        console.log(getVerticalScrollPercentage(document.body));
        cl1.css('transform', 'rotate(-' + getVerticalScrollPercentage(document.body) * 3.6 + 'deg');
        cl2.css('transform', 'rotate(' + getVerticalScrollPercentage(document.body) * 3.6 + 'deg');
        cl3.css('transform', 'rotate(-' + getVerticalScrollPercentage(document.body) * 3.6 + 'deg');
        cl4.css('transform', 'rotate(' + getVerticalScrollPercentage(document.body) * 3.6 + 'deg');
        cl5.css('transform', 'rotate(-' + getVerticalScrollPercentage(document.body) * 3.6 + 'deg');
        // bg.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        // bg2.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 0 + 'px)');
        // bg3.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 0 + 'px)');
        // bg4.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        // zekk.css('transform', 'translateX(-' + x * 30 + 'px)');
        // map.css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)');
    });
}
function getVerticalScrollPercentage(elm) {
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight) * 100
}
const swiper = new Swiper('.home-portf .swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.home-portf__pagination',
        type: 'bullets',
    },
    loop: true
});
const swiper2 = new Swiper('.home-rev .swiper', {

    slidesPerView: 4,
    spaceBetween: 28,
    autoplay: {
        delay: 2000,
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.home-rev__next1',
        prevEl: '.home-rev__prev1',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 28
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 4,
            spaceBetween: 28
        }
    }
});
const swiper3 = new Swiper('.home-proj .swiper', {

    slidesPerView: 6,
    spaceBetween: 8,
    scrollbar: {
        el: '.home-proj__line',
        draggable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.home-rev__next2',
        prevEl: '.home-rev__prev2',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 19
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 28
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 6,
            spaceBetween: 8
        }
    }
});
const swiper4 = new Swiper('.home-blog .swiper', {

    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.home-rev__next3',
        prevEl: '.home-rev__prev3',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 2,
            spaceBetween: 0
        }
    }
});
const swiper5 = new Swiper('.overlay-gal .swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    loop: true,

    navigation: {
        nextEl: '.overlay-gal__next',
        prevEl: '.overlay-gal__prev',
    }
});
(function ($) {
    $(function () {

        $('.portf__tabs').on('click', '.portf__tab:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.team').find('.portf__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$('.proj__block').on('click', function (e) {
    e.preventDefault();
    let numSlide = $(this).attr('data-slide');
    $('.overlay-gal__slider')[0].swiper.slideTo(numSlide);
    $('.overlay-gal').addClass('overlay-active');
    $('.overlay-gal').addClass('overlay-start');
    setTimeout(function () {
        $('.overlay-gal .popup').addClass('active');
    }, 300);
});
const swiper6 = new Swiper('.proj-other .swiper', {

    slidesPerView: 3,
    spaceBetween: 28,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.proj-other__next',
        prevEl: '.proj-other__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 28
        }
    }
});
const swiper7 = new Swiper('.servin__right .swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.servin__pagination',
        type: 'bullets',
    },
    loop: true
});
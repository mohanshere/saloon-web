// Initialize AOS animation
AOS.init({
    duration: 600,   // animation duration
    easing: 'ease',
    once: true,       // animation only once
    offset: 120       // trigger offset
});

// swiper slider for partners section
const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: false,
    pagination: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
swiperEl.initialize();

// owl for testimonial


$(document).ready(function () {
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,

        responsive: {

            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
});




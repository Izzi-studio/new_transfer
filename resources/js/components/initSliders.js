export default function initSliders() {
    new Swiper.default('.reviews__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
            nextEl: '.reviews__slider .swiper-button-next',
            prevEl: '.reviews__slider .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    })

    new Swiper.default('.advantages__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.advantages__slider .swiper-button-next',
            prevEl: '.advantages__slider .swiper-button-prev',
        },
    })
}
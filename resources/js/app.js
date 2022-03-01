window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.$ = window.jQuery = require('jquery')

import Swiper, { Navigation } from 'swiper';
import activeHeaderScroll from './components/activeHeaderScroll'
import burgerMenu from './components/burgerMenu'
import headerHeightFun from './components/headerHeightFun'
import scrollTop from './components/scrollTop'
import sectionNavigation from './components/sectionNavigation'
import vhModule from './components/vhModule'

$(document).ready(function() {
    activeHeaderScroll()
    burgerMenu()
    headerHeightFun()
    scrollTop()
    sectionNavigation()
    vhModule()

    $('.advantages2__block-btn').click(function () {
        const parent = $(this).closest('.advantages2__block')
        parent.toggleClass('advantages2__block_active')
        parent.find('.advantages2__block-txt').slideToggle()
    })

    $('.faq__btn').click(function () {
        $(this).hide()
        $('.faq-block').show()
    })

    $('.faq-block__btn').click(function () {
        const parent = $(this).closest('.faq-block')
        parent.find('.faq-block__slide').slideToggle()
        parent.toggleClass('faq-block_active')

        if(parent.hasClass('faq-block_active')) {
            $(this).text($(this).data('hide-txt'))
        } else {
            $(this).text($(this).data('show-txt'))
        }
    })

    $('.profile-sidebar__item_has-sublist .profile-sidebar__link').click(function (e) {
        e.preventDefault()
        $(this).parent().toggleClass('profile-sidebar__item_active')
    })

    $('.offer__btn-details').click(function () {
        $(this).closest('.offer').toggleClass('offer_open_details')
    })

    $('.offer__btn-companies').click(function () {
        $(this).closest('.offer').toggleClass('offer_open_companies')
    })

    new Swiper('.reviews__slider', {
        modules: [ Navigation ],
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

    new Swiper('.advantages__slider', {
        modules: [ Navigation ],
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.advantages__slider .swiper-button-next',
            prevEl: '.advantages__slider .swiper-button-prev',
        },
    })
})
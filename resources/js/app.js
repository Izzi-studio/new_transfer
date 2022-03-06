window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.$ = window.jQuery = require('jquery')

import Vue from 'vue'

import router from './router'
import store from './store'

import FormField from './components/FormField'
import FormCheckbox from './components/FormCheckbox'
import FormRadio from './components/FormRadio'

import RegisterPartner from './steps-forms/views/register-partner/index'
import Transfer from './steps-forms/views/transfer/index'
import Cleaning from './steps-forms/views/cleaning/index'

import Swiper, { Navigation } from 'swiper'
import activeHeaderScroll from './modules/activeHeaderScroll'
import burgerMenu from './modules/burgerMenu'
import headerHeightFun from './modules/headerHeightFun'
import scrollTop from './modules/scrollTop'
import sectionNavigation from './modules/sectionNavigation'
import vhModule from './modules/vhModule'

Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.component('form-field', FormField)
Vue.component('form-checkbox', FormCheckbox)
Vue.component('form-radio', FormRadio)

if (document.getElementById('app')) {
    new Vue({
        el: '#app',
        router,
        store,
        components: {
            RegisterPartner,
            Transfer,
            Cleaning
        }
    });
}

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
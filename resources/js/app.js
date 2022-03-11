window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.$ = window.jQuery = require('jquery')
window.toastr = require('toastr');
window.toastr.options = {
  "positionClass": "toast-bottom-right",
}

import Vue from 'vue'

import router from './router'
import store from './store'

import DatePicker from 'vue2-datepicker';
import FormField from './components/FormField'
import FormCheckbox from './components/FormCheckbox'
import FormRadio from './components/FormRadio'

import Swiper, { Navigation } from 'swiper'
import activeHeaderScroll from './functions/activeHeaderScroll'
import burgerMenu from './functions/burgerMenu'
import headerHeightFun from './functions/headerHeightFun'
import scrollTop from './functions/scrollTop'
import sectionNavigation from './functions/sectionNavigation'
import vhModule from './functions/vhModule'

Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.component('form-field', FormField)
Vue.component('form-checkbox', FormCheckbox)
Vue.component('form-radio', FormRadio)
Vue.component('date-picker', DatePicker)

Vue.prototype.globalGetDate = (dateStr) => {
    const dateParts = dateStr.split('-');
    return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
}

if (document.getElementById('app')) {
    new Vue({
        el: '#app',
        router,
        store,
        components: {
            RegisterPartner: () => import('./steps-forms/views/register-partner/index'),
            Transfer: () => import('./steps-forms/views/transfer/index'),
            Cleaning: () => import('./steps-forms/views/cleaning/index'),
            TransferCleaning: () => import('./steps-forms/views/transfer-cleaning/index'),
            Painting: () => import('./steps-forms/views/painting/index'),
            Floorer: () => import('./steps-forms/views/floorer/index'),
            Heating: () => import('./steps-forms/views/heating/index'),
            Electrician: () => import('./steps-forms/views/electrician/index'),
            Gartner: () => import('./steps-forms/views/gartner/index'),
            Carpenter: () => import('./steps-forms/views/carpenter/index'),
            ClientSidebar: () => import('./profiles/client/Sidebar')
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

    window.addEventListener('resize', () => {
        vhModule()
        headerHeightFun()
    })

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

    $('.profile').click(function (e) {
        if ($(e.target).hasClass('profile-sidebar__link') &&
            $(e.target).closest('.profile-sidebar__item_has-sublist')
        ) {
            $(e.target).parent().toggleClass('profile-sidebar__item_active') 
        }

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
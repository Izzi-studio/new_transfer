require('./bootstrap');

import activeHeaderScroll from './components/activeHeaderScroll'
import burgerMenu from './components/burgerMenu'
import headerHeightFun from './components/headerHeightFun'
import initPopups from './components/initPopups'
import initSelectric from './components/initSelectric'
import initSliders from './components/initSliders'
import scrollTop from './components/scrollTop'
import sectionNavigation from './components/sectionNavigation'
import vhModule from './components/vhModule'

$(document).ready(function() {
    activeHeaderScroll()
    burgerMenu()
    headerHeightFun()
    // initPopups()
    // initSelectric()
    initSliders()
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
})
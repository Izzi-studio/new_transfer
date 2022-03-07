export default function burgerMenu() {
    let burger = $('.burger');
    let menu = $('.header__menu');

    $(document).click(function (e) {
        if (burger.is(e.target) || burger.has(e.target).length === 1) {
            if (menu.hasClass('header__menu_active')) {
                menu.removeClass('header__menu_active');
                burger.removeClass('burger_active');
                $('body').removeClass('overflow-hidden')
            } else {
                menu.addClass('header__menu_active');
                burger.addClass('burger_active');
                $('body').addClass('overflow-hidden')
            }
        } else if (!menu.is(e.target) && menu.has(e.target).length === 0 && menu.hasClass('header__menu_active')) {
            menu.removeClass('header__menu_active');
            burger.removeClass('burger_active');
            $('body').removeClass('overflow-hidden')
        }
    });

    function changeStateNav() {
        if(window.innerWidth <= 992) {
            menu.addClass('header__menu_transition');
        } else {
            menu.removeClass('header__menu_transition');
        }
    }

    window.addEventListener('resize', changeStateNav);
    changeStateNav();
}
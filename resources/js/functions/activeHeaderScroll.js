export default function activeHeaderScroll() {
    let header = $('header.header');
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() >= 10) {
            header.addClass('header_active');
        } else {
            header.removeClass('header_active');
        }
    });
}
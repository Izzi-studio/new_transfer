export default function sectionNavigation() {
    $(document)
        .on('click', '[href="#"]', function (e) {
            e.preventDefault();
        })
        .on('click', 'a[href^="#section"]', function () {
            let el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top - $('.header').outerHeight()
            }, 1000);
            return false;
        })
}
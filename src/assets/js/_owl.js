var owl = $('#owl1');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        300: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
})
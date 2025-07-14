
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Event carousel with uniform height
    $(".event-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 2 },
            1200: { items: 3 }
        },
        onInitialized: function () {
            var maxHeight = 0;
            $('.event-carousel .event-item').each(function () {
                $(this).css('height', 'auto');
                var thisHeight = $(this).height();
                maxHeight = Math.max(maxHeight, thisHeight);
            });
            $('.event-carousel .event-item').height(maxHeight);
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Back to top button visibility
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Smooth scroll for navbar and back-to-top
    $(document).ready(function () {
        var sectionOffsets = {};
        $('.navbar .nav-link, .back-to-top').each(function () {
            var href = $(this).attr('href');
            if (href.startsWith('#')) {
                var target = $(href);
                if (target.length) {
                    sectionOffsets[href] = target.offset().top - 80;
                }
            }
        });

        $('.navbar .nav-link, .back-to-top').click(function (e) {
            var href = $(this).attr('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                var targetOffset = sectionOffsets[href];
                if (targetOffset !== undefined) {
                    $('html, body').stop().animate({
                        scrollTop: targetOffset
                    }, {
                        duration: 800,
                        easing: 'easeInOutCubic'
                    });
                }
            }
        });
    });

    // Animation on scroll
    document.addEventListener("DOMContentLoaded", function () {
        function checkInView() {
            const elements = document.querySelectorAll('.animate-slide-in');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight) {
                    element.classList.add('in-view');
                }
            });
        }
        window.addEventListener('scroll', checkInView);
        checkInView();
    });

    // Ensure uniform height for group items
    function setUniformHeight() {
        var maxHeight = 0;
        $('.group-item').each(function () {
            $(this).css('height', 'auto');
            var thisHeight = $(this).height();
            maxHeight = Math.max(maxHeight, thisHeight);
        });
        $('.group-item').height(maxHeight);
    }

    $(window).on('load resize', setUniformHeight);

    // Initialize WOW.js for animations
    $(document).ready(function () {
        new WOW().init();
    });
})(jQuery);

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Set active navbar link based on current page
    $(document).ready(function () {
        var currentPage = window.location.pathname.split('/').pop();
        $('.navbar-nav .nav-link').each(function() {
            var linkPage = $(this).attr('href');
            if (linkPage === currentPage) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
})(jQuery);

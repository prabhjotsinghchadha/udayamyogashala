(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


     // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + 50 && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
                $('.scroll-to-top').addClass('active');
            });
        } else if ($(this).scrollTop() <= pos.top + 50 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
                 $('.scroll-to-top').removeClass('active');
            });
        }
    });


    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -85
    });


    // Testimonials caroussel

    $(".testimonial-carousel").owlCarousel({

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [550, 1],
        itemsMobile: [480, 1],
        pagination: false,
        autoPlay: true,
        pagination: true,
        mouseDrag:false
    });


  //Popup element



   $('.venobox').venobox(); 


   //Instagram feed setup

    var instaFeed = new Instafeed({
        get: 'user',
        userId: '8525288462',
        accessToken: '8525288462.c89df6a.5ee63eddf7f148bb9cc56a56edbdc00e',
        limit: 6,
        resolution: 'standard_resolution',
        template: '<li><a class="hover-effect" target="_blank" href="{{link}}"><span class="hover-effect-container"><span class="hover-effect-icon hover-effect-icon-small"><span class="fa fa-eye hover-effect-icon-inner"></span></span></span></span><img class=" mw-100 " src="{{image}}" /></a></li>'
    });
    instaFeed.run();


})(jQuery);
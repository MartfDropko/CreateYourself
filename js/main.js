(function ($) {
    "use strict";
    //jQuery MeanMenu
    jQuery('nav#dropdown').meanmenu();
    //jquery Stiky Menu activation code
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#sticker').addClass('stick');
        } else {
            $('#sticker').removeClass('stick');
        }
    });
    //jquery Nav Scroll activation code
    $('#nav,.down').onePageNav({
        scrollOffset: 60
    });
    //jquery Scollup activation code
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    //jquery Trainer activation code
    $("#tabmenu").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });
    //jquery blog section activation code
    $(".blog-content-area").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });
    //Trainer section Jquery
    $(".tabmenu-list").on("click", ".owl-item li", function () {
        $("#tabmenu .owl-item li").each(function () {
            $(this).removeClass('active');
            loadProgressBar();
        });
    });
    //Gallery JS Activaton Code
    $(window).load(function () {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });
    //Custom Progress Bar Activation code Using Jquery
    $(window).load(function () {
        loadProgressBar();
    });
    function loadProgressBar() {
        $('.skill-area > .progress > .progress-bar').css('width', '0%');
        $('.skill-area').each(function (index, el) {
            $(this).children(".progress").each(function (index, el) {
                var f = $(this).find('.progress-bar'),
                    min = f.attr('aria-valuemin'),
                    max = f.attr('aria-valuemax'),
                    p = f.attr('aria-valuenow'),
                    k = 0,
                    label = f.children('.progress-label');
                p = (p ? p : 0);

                var go = function () {
                    return k >= p || k >= 100 ? ( false ) : ( k += 1, f.css('width', k + '%'), label.text(k + '%'), setTimeout(go, 10) )
                };
                go();
            });
        });
    }


    /***************************************
     Contact Form activation code
     ***************************************/
    if ($('#contact-form').length) {
        $('#contact-form').validator().on('submit', function (e) {
            var $this = $(this),
                $target = $(".form-response");
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-danger'><p>Please select all required field.</p></div>");
            } else {
                var name = $("#full-name").val();
                var email = $("#email").val();
                var phone = $("#phone").val();
                var subject = $("#subject").val();
                var message = $("#message").val();
                // ajax call
                $.ajax({
                    url: 'php/form-process.php',
                    type: 'POST',
                    data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message + "&subject=" + subject,
                    beforeSend: function () {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function (text) {
                        if (text == "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message Has Been Sent.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-danger'><p>" + text + "</p></div>");
                        }
                    }
                });

                return false;
            }
        });
    }

    /****************************************
    Google Map activation code
    ***************************************/
    if($("#googleMap").length){
        var initialize = function() {
          var mapOptions = {
              zoom: 15,
              scrollwheel: false,
              center: new google.maps.LatLng(-37.81618, 144.95692)
          };

          var map = new google.maps.Map(document.getElementById('googleMap'),
              mapOptions);

          var marker = new google.maps.Marker({
              position: map.getCenter(),
              animation:google.maps.Animation.BOUNCE,
              icon: 'img/map-marker.png',
              map: map
          });

        }
          google.maps.event.addDomListener(window, 'load', initialize);
        }

})(jQuery);
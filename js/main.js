/*************************************************************************
TripBuddy.sg (c) 2016. All rights reserved.
*************************************************************************/

// jQuery to Collapse Navbar on Scroll:
$(window).scroll(function () {
    if ($(".navbar").offset().top > 70) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for Anchor Link Smooth Scrolling:
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $('.navbar-img').click(function() {
        $('html, body').animate({scrollTop : 0}, 1000);
		return false;
    })
});
/* ##########################
         preloader
############################ */
$(window).on('load', function () {
	$('#status').fadeOut();
	$('#preloader').delay(550).fadeOut();
});

/* ##########################
         responsivetabs
############################ */

$('#services-tabs').responsiveTabs({
	animation: 'slide'
});
/* ##########################
         stats
############################ */
$(document).ready(function ($) {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
});

/* ##########################
         stats
############################ */

$(function () {


	//show/hide nav on page load
	showHideNav();



	$(window).scroll(function () {

		//show/hide nav on page load on windows scroll
		showHideNav();

	});

	function showHideNav() {


		if ($(window).scrollTop() > 50) {

			//show white nav

			$("nav").addClass("white-nav-top");

			// show bact to top button//
			$("#back-to-top").fadeIn();

		} else {

			//hide white nav
			$("nav").removeClass("white-nav-top");

			// hide bact to top button//
			$("#back-to-top").fadeOut();

		}
	}
});


// smooth scroll//

$(function () {

	$("a.smooth-scroll").click(function (Event) {

		Event.preventDefault();

		//get section id like #about #services etc
		var section_id = $(this).attr("href");

		$("html, body").animate({

			scrollTop: $(section_id).offset().top - 64
		}, 1250);
	});
})

/*###############################################
              MOBILE MENU
###############################################*/
$(function () {
	// SHOW mobile navigation//
	$("#mobile-nav-open-btn").click(function () {
		$("#mobile-nav").css("height", "100%");
	});

	// HIDE mobile navigation//
	$("#mobile-nav-close-btn, #mobile-nav a").click(function () {
		$("#mobile-nav").css("height", "0%");
	});

});
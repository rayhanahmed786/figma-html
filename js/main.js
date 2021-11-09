/*
-----------------------------
|   | Services Section
-----------------------------
*/
$(function () {
	new WOW().init();
});

/*
-----------------------------
|   | Pop Up
-----------------------------

-----------------------------
|   | Team Section
-----------------------------
*/



/*
-----------------------------
|   | Counter
-----------------------------
*/


/*
-----------------------------
|   | Clients
-----------------------------
*/
$("body").css("padding-top", $(".navbar").outerHeight() + "px");

// detect scroll top or down
if ($(".smart-scroll").length > 0) {
  // check if element exists
  var last_scroll_top = 0;
  $(window).on("scroll", function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
    } else {
      $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
    }
    last_scroll_top = scroll_top;
  });
}

/*
-----------------------------
|   | Navigation
-----------------------------
*/

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			//$('nav').removeClass('vesco-top-nav');
			$('#back-to-top').fadeOut();
		} else {
			//$('nav').addClass('vesco-top-nav');

			$('#back-to-top').fadeIn();
		}
	});
});
//Close Mobile Menu of click
$(function () {
	$(".navbar-collapse li a").on("click touch", function(){
		$(".navbar-toggler").click();
	});
});

//Smooth Scroll

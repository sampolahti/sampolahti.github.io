

	$(function() {
		$('.map').maphilight();
		$('#squidheadlink').mouseover(function(e) {
			$('#squidhead').mouseover();
		}).mouseout(function(e) {
			$('#squidhead').mouseout();
		}).click(function(e) { e.preventDefault(); });
	});

	$(document).ready(function(e) {
		$('img[usemap]').rwdImageMaps();

	});
$('img[usemap]').maphilight();

$(document).ready(function(){
	
	var isonkuvanleveys = $('#navimg').width();
	var isonkuvanleveys2 = isonkuvanleveys - 10;
	$('#footer').css('margin-left', isonkuvanleveys2)
	$('#content').css('margin-left', isonkuvanleveys)

	var kokosivunleveys = $('#content').width();
	var kokosivunleveys2 = kokosivunleveys + 15;
	$('#footer').css('width', kokosivunleveys2)

	if ($(window).width() < 1016) {
		$('#footer').css('width', "100%")
		$('#footer').css('margin-left', "0")
		$('#content').css('margin-left', "0")

		$('#mobile-bar-button').click(function(){
			$('#nav').toggleClass('visible')

			var clicks = $(this).data('clicks');
			if (clicks) {
				$('#mobile-bar-button').addClass("fas fa-stream");
				$('#mobile-bar-button').removeClass("cool-effect")
				$('#mobile-bar-button').removeClass("fa fa-close");
			} else {
				$('#mobile-bar-button').addClass("fa fa-close");
				$('#mobile-bar-button').addClass("cool-effect")
				$('#mobile-bar-button').removeClass("fas fa-stream");
			}
			$(this).data("clicks", !clicks);
			/*$('#nav').css('visibility', 'visible')*/
		});
	}

	if ($(document.body).height() != $("*").height()) {
		$('#footer').css('position', 'fixed')
		$('#footer').css('bottom', '0')
	} else {
		$('#footer').css('position', 'relative')
	}

		$(window).bind('resize', function(e) {
			if (window.RT) clearTimeout(window.RT);
			window.RT = setTimeout(function() {
			this.location.reload(false); /* false to get page from cache */
			}, 100);
		});


});
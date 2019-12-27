var ranAlready = false;
var sec = 500;

if ( $(window).width() <= $("#ninehundredpixels").width() ) {
	var sec = 0;
}

window.onload = function() {
	testQueryString();
	ranAlready = true;
};

window.onpopstate = function() {
	if (!ranAlready) {
		testQueryString();
	};
};

function testQueryString() {

	if (window.location.search.length == 0) {
		load_front_page();
	} else {
		if (window.location.search == "?p=about") {
			load_sub_page("ok")
		};
	}
};

$("#portfolio-btn").click(function(event) {
	load_sub_page("ok")
});


function load_sub_page(url) {
	// if (window width) > 900px div

	$(".info").addClass('ninetypercent-width');
	$(".infoUnder").addClass('ninetypercent-width');

	setTimeout(function() {
		$.ajax({
			url: url+'.html',
			type: 'GET',
			dataType: 'html',
		})
		.done(function(data) {
			console.log("success");
			$("#info-inner").html(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
			ranAlready = false;
		});
	}, sec);

};

function load_front_page() {
	// if (window width) > 900px div

	$(".info").removeClass('ninetypercent-width');
	$(".infoUnder").removeClass('ninetypercent-width');

	setTimeout(function() {
		$.ajax({
			url: 'main.html',
			type: 'GET',
			dataType: 'html',
		})
		.done(function(data) {
			console.log("success");
			$("#info-inner").html(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
			ranAlready = false;
			if (!window.location.search.length == 0) {
				history.replaceState( { contentId: 2, title: 'About me' }, 'About me', '?p=home');
			}
		});
	}, sec);

};
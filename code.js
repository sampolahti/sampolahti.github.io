$(document).ready(function(){
	$(".content-wrapper").fadeIn(500);
});

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
		if (window.location.search == "?p=home") {
			load_front_page();
		} else if (window.location.search == "?p=portfolio") {
			load_sub_page("portfolio");
		} else if (window.location.search == "?p=cv") {
			load_sub_page("cv");
		} else if (window.location.search == "?p=gallery") {
			load_sub_page("gallery");
		} else {
			$("#info-inner").html("Sivua ei löydy");
		}
	}
};

$(".back-button").click(function(event) {
	load_front_page();
});

$("#portfolio-btn").click(function(event) {
	load_sub_page("portfolio");
});

$("#cv-btn").click(function(event) {
	load_sub_page("cv");
});

$("#gallery-btn").click(function(event) {
	load_sub_page("gallery");
});

function load_sub_page(url) {
	// if (window width) > 900px div

	$(".content-wrapper").fadeOut(100);

	$(".info").addClass('ninetypercent-width');
	$(".infoUnder").addClass('ninetypercent-width');

	setTimeout(function() {
		$.ajax({
			url: url+'.html',
			type: 'GET',
			dataType: 'html',
			beforeSend: function() {
				$("#info-inner").text('Ladataan...');
			},
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

	$(".content-wrapper").fadeOut(100);

	$(".info").removeClass('ninetypercent-width');
	$(".infoUnder").removeClass('ninetypercent-width');

	setTimeout(function() {
		$.ajax({
			url: 'main.html',
			type: 'GET',
			dataType: 'html',
			beforeSend: function() {
				$("#info-inner").text('loading');
			},
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
				history.replaceState( { contentId: 1, title: 'home' }, 'home', '?p=home');
			}
		});
	}, sec);

};
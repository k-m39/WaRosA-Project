$(document).ready(function() {
	var $win = $(window),
	    $main = $('main'),
	    $nav = $('nav'),
	    navHeight = $nav.outerHeight(),
	    navPos = $nav.offset().top,
	    fixedClass = 'is-fixed';

	$win.on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > navPos ) {
			$nav.addClass(fixedClass);
			$main.css('margin-top', navHeight);
		} else {
			$nav.removeClass(fixedClass);
			$main.css('margin-top', '0');
		}
	});
});

$(window).resize(function(){
    var w = $(window).width();
    var x = 580;
    if (w <= x) {
        $('#sample').css({
            color: 'red'
        });
    } else {
        $('#sample').css({
            color: 'black'
        });
    }
});

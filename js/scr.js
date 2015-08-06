var scroller=jQuery.browser.webkit ? "body": "html";

/* modernize */
function modernize() {
	// placeholder 
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}
}

/* scrollUp */
function scrollUp(block,targetBlock) {
	$(block).click(function(e){
		var target = $(targetBlock).offset().top;
		$(scroller).animate({scrollTop:target},800);
		return false;
		e.preventDefault();
	});
}

function navbartoggle(){
	$('.navbar-toggle').click(function(){
		var navbar = $('.navbar-collapse');
		if($(this).is('.active')){
			$(this).removeClass('active');
			navbar.stop().slideUp().removeClass('active');
		}
		else{
			$(this).addClass('active');
			navbar.stop().slideDown().addClass('active');
		}
		return false;
	});
}

$(document).ready(function(){
	modernize();
	navbartoggle();
	$('.footer_placeholder').height($('.footer').outerHeight());
});

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

function zTabs(block){
	if (typeof(block)==='undefined') block=$('.zTabs');
	block.each(function(){
		var $wrap=$(this);
		if (!$wrap.is('.zTabs-done')){
			$wrap.addClass('zTabs-done');
			$('[data-zTabId]',$wrap).click(function(event){
				event.preventDefault();
				var tabid=$(this).data('ztabid');
				$('[data-zTabId]',$wrap).removeClass('active');
				$('[data-zTabId="'+tabid+'"]',$wrap).addClass('active');
				$('[data-zTab]',$wrap).removeClass('active').addClass('hidden');
				$('[data-zTab="'+tabid+'"]',$wrap).addClass('active').removeClass('hidden');
			})
			if ($('.active[data-zTabId]',$wrap).length>0)
				$('.active[data-zTabId]',$wrap).click();
			else
				$('[data-zTabId]:eq(0)',$wrap).click();
		}
	})
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

/*Podderzhka Placeholderov v starih brouzerah*/
$(document).ready(function(){
	modernize();
	zTabs();
	$('.footer_placeholder').height($('.footer').outerHeight());
});

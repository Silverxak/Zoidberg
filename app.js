$(document).ready(function(){
	$('.tab_item_top_tags:first').each(function(){
		var parser = $(this).parents('.tab_item_content').children('.tab_item_name').text();
		alert(parser);
		var regExp = /.+(?=\s-)/;
		var gname = regExp.exec(parser);
		alert(gname);
		$(this).before('<a target="_blank" href="http://steamcommunity.com/market/search?q=' + gname + '#p1_quantity_desc"><span class="platform_img zoidberg-cards-icon"></span></a>');
	});

/*	$('.zoidberg-cards-icon').each(function(){
		$(this).on('click', function(){
			$(this).click();
		});
	});

	$('.tab_item_overlay').css('z-index','0');*/
});

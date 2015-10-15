$(document).ready(function(){

	$('.tab_item_top_tags').each(function(){
		var parser = $(this).parents('.tab_item_content').children('.tab_item_name').text();
		var regExp = /.+(?=\s-)/;
		var regExp2 = /.+/;
		var URL = encodeURIComponent((regExp.test(parser)) ? regExp.exec(parser) : regExp2.exec(parser));
		$(this).before('<a target="_blank" class="link-to-card" href="http://steamcommunity.com/market/search?q=' + URL + '#p1_quantity_desc"><span class="platform_img zoidberg-cards-icon"></span></a>');
	});

	$('.tab_item_cap').each(function(){
		$(this).children('img').wrap('<a class="screen" target="_blank" href="' + $(this).siblings('.tab_item_overlay').attr('href') + '"></a>');
	});

	$('.screen').ready(function(){
		$('.tab_item_overlay').hide();
		$('.tab_item_overlay_hover').hide();		
	});



});

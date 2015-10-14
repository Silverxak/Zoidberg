$(document).ready(function(){
	$('.tab_item_top_tags').each(function(){
		var parser = $(this).parents('.tab_item_content').children('.tab_item_name').text();
		var regExp = /.+(?=\s-)/;
		var regExp2 = /.+/;
		if(regExp.test(parser))
			var gname = regExp.exec(parser);
		else
			var gname = regExp2.exec(parser);
		$(this).before('<a target="_blank" class="link-to-card" href="http://steamcommunity.com/market/search?q=' + gname + '#p1_quantity_desc"><span class="platform_img zoidberg-cards-icon"></span></a>');
	});

	//$('.tab_item_overlay').css('z-index','0');
	$('.tab_item_overlay').remove();

	$('.link-to-card:first').ready(function(){
		/*var link = $(this).attr('href');
		console.log(link);*/
		/*$('.link-to-card').on('click',function(){
			//window.open(link); 
			alert($(this).attr('href'));
		});*/
		var link = $(this).attr('href');
		alert(link);
	});


});

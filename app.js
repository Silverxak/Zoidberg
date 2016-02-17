//$(document).ready(function(){

//---------Declare---------

function smailer (ids, txt){
	$.ajax({
    data: "message=" + encodeURIComponent(txt),
    type: "POST",
    url: "ajax.asp?id_i=" + ids + "&action=new_debate",
    dataType: "text",
    contentType: "application/x-www-form-urlencoded; charset=windows-1251",
	});
};

//---------------------------

$('.tab_item_top_tags').each(function() {
	var parser = $(this).parents('.tab_item_content').children('.tab_item_name').text();
	var regExp = /.+(?=\s-)/;
	var regExp2 = /.+/;
	var URL = encodeURIComponent((regExp.test(parser)) ? regExp.exec(parser) : regExp2.exec(parser));
	$(this).before('<a target="_blank" class="link-to-card" href="http://steamcommunity.com/market/search?q=' + URL + '#p1_quantity_desc"><span class="platform_img zoidberg-cards-icon"></span></a>');
});

$('.link-to-card').each(function() {
	$(this).after('<a target="_blank" class="link-to-steamdb" href="https://steamdb.info/app/' + $(this).parents('.tab_item').attr('data-ds-appid') + '/graphs/"><span class="platform_img steamdb-icon"></span></a>');
});

$('.tab_item_cap').each(function() {
	$(this).children('img').wrap('<a class="screen" target="_blank" href="' + $(this).siblings('.tab_item_overlay').attr('href') + '"></a>');
});

$('.screen').ready(function() {
	$('.tab_item_overlay').hide();
	$('.tab_item_overlay_hover').hide();
});

$('.responsive_page').each(function(){
	$(this).children('div:first').before('<div class="left_menu"><a target="_blank" href="http://steamcommunity.com/market/"><div class="gomarket">market</div></a><a href="#global_header"><div class="goup">up</div></a></div>');
});



//});

/*$('td:contains("продажа товара") ~ td.row_underline:not(:has("a"))').each(function(){
	$(this).append('<a href="http://google.com"></a>')
	.append('<img src="http://www.adsit.org/images/mail2.png" width="16" height="16" border="0">')
})*/



$('td:contains("продажа товара") + td > div > a').each(function(){
	var url = /\d+(?!id_i)/.exec($(this).attr('href'));
	var gname = /.+(?=\()/.exec($(this).text());
	var ltr = 'Спасибо что воспользовались нашими услугами, и приобрели игру ' + gname[0] + ', если вам не сложно оставьте отзыв о нас - тем самым вы сделаете нас лучше, а наши цены еще ниже, заранее спасибо';
	$.get('ajax.asp', {action: 'debates', id_i: url[0], dataType: 'json'})
	.success(function(e){ 
		if(!/не просмотрено/.test((e.html).toString())) 
			smailer(url[0], ltr)
	})
});





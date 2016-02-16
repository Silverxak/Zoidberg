//$(document).ready(function(){

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

$('td:contains("продажа товара") ~ td.row_underline:not(:has("a"))').each(function(){
	$(this).append('<a href="http://google.com"></a>')
	.append('<img src="http://www.adsit.org/images/mail2.png" width="16" height="16" border="0">')
})

$('td:contains("продажа товара") + td > div > a').attr('href')

var url = $('td:contains("продажа товара") + td > div > a').attr('href')
$.get(url).success(function(msg) { if(/"не просмотрено"/.test(msg)) alrt('all good'); })

\d+(?!id_i)

var urlString = $('td:contains("продажа товара") + td > div > a').attr('href')
var url = /\d+(?!id_i)/.exec(urlString)
$.get('ajax.asp', {action: 'debates', id_i: url, dataType: 'json'}).success(function(e){ if(/не просмотрено/.test((e.html).toString())) alert('all good')})

// function get_Debates() {
//     $.ajax('ajax.asp?action=debates&id_i=41446628&rnd=' + Math.random(), {
//         method: 'GET',
//         success: function (res) {
//             $("#debates_content").html(res.html);
//             $('html, body').animate({
//                 scrollTop: $("#debates_bottom").offset().top
//             }, 500);
//         }
//     })
// }

$('td:contains("продажа товара")').each(function(){
	var urlString = $('td:contains("продажа товара") + td > div > a').attr('href')
	var url = /\d+(?!id_i)/.exec(urlString)
	$.get('ajax.asp', {action: 'debates', id_i: url, dataType: 'json'}).success(function(e){ if(/не просмотрено/.test((e.html).toString())) alert('all good')})	
});
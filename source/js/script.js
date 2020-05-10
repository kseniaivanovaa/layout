$('.wrapper').addClass('loaded');

$('icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu_body').toggleClass('active');
	$('body').toggleClass('lock');
});

// function ibg(){
// 	$.each($('.ibg'), function(index,val){
// 		if($(this).find('img').length>0){
// 			$(this)css('background-image','url("'+$(this).find('img').attr('src')+'")');

// 		}
// 	}); 
// }
// ibg();


// function ibg(){

// let ibg=document.querySelectorAll(".ibg");
// for (var i = 0; i < ibg.length; i++) {
// if(ibg[i].querySelector('img')){
// ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
// }
// }
// }

// ibg();

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

//============================

$('.header-menu__icon').click(function(event){
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll'$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body.html'),scrollTop(parseInt($('body').data('scroll')));
	}
});



























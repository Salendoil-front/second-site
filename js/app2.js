$(function(){
	let header = $('.header');
	let intro = $('.intro');
	let introH = intro.innerHeight();
	console.log(introH);
	let scrollPos = $(window).scrollTop();
	console.log(scrollPos);

	$(window).on('scroll', function(){
		scrollPos = $(this).scrollTop();
		console.log(scrollPos);
	})

	if(introH < scrollPos){
		header.addClass('fixed');
	}

});
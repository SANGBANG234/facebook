$(window).scroll(function(){

  	var windowWidth = $(window).width();
  	if (windowWidth > 100) {
  		var scroll = $(window).scrollTop();
  		$('.main .acerca-de article').css({
  			'transform': 'translate(0px, -' + scroll/4 + '%)'
  		});
  	
  	}
  });
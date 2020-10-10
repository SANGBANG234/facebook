$(document).ready(function(){

  $('.menu .nose,.btn_carrito, .btn_login, .logi').each(function(index, elemento){
  	$(this).css({

  		'top': '-100px'
  	});
  	 $(this).animate({
  	 	top: '0'
  	 }, 1000 + (index * 50 + 1000));

  });

  if ( $(window).width() > 100) {
  	$('header .nombre').css({
  		opacity: .1,
  		marginTop: '500px'
  	});
  	$('header .nombre').animate({
  		opacity: 1,
  		marginTop: '0'
  	}, 4000);
  }



});
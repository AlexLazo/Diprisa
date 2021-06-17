/*Cargador de inicio*/
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});
/*Código del menú*/
		var menuBtn = document.getElementById("menuBtn");
		var sideNav = document.getElementById("sideNav");
		var menu = document.getElementById("menu");

		sideNav.style.right = "-250px";

		menuBtn.onclick = function(){
			if(sideNav.style.right == "-250px"){
				sideNav.style.right = "0";
				menu.src = "images/close.png";
			}
			else{
				sideNav.style.right = "-250px";
				menu.src = "images/menu.png";
			}
		}
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500,
		speedAsDuration: true
});

// Botón regresar al inicico
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});
$('.back-to-top').click(function () {
	$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
	return false;
});

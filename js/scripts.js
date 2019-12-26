$(document).ready(function() {
	//scrollowanie po kliknięciu w opcję z menu
	$("#about-me").click(function() {
		$('html, body').animate({
			scrollTop: $(".about-me").offset().top
		}, 1000);
	});
	$("#features").click(function() {
		$('html, body').animate({
			scrollTop: $(".features").offset().top
		}, 1000);
	});
	$("#offer").click(function() {
		$('html, body').animate({
			scrollTop: $(".offer").offset().top
		}, 1000);
	});
	$("#your-bmi").click(function() {
		$('html, body').animate({
			scrollTop: $(".your-bmi").offset().top
		}, 1000);
	});
	$("#benefits").click(function() {
		$('html, body').animate({
			scrollTop: $(".benefits").offset().top
		}, 1000);
	});
	$("#comments").click(function() {
		$('html, body').animate({
			scrollTop: $(".comments").offset().top
		}, 1000);
	});
	$("#contact").click(function() {
		$('html, body').animate({
			scrollTop: $(".contact").offset().top
		}, 1000);
	});
	$(".btn-light").click(function() {
		$('html, body').animate({
			scrollTop: $(".about-me").offset().top
		}, 1000);
	});
	//obliczanie bmi
	$('#button-calc').click(
		function sum() {
			var bmi=0;
			var waga=$('#input_mass').val();
			var wzrost=$('#input_height').val();
			var czykobieta=false;
			bmi=waga/(wzrost*wzrost);
			bmi=bmi*10000;
			bmi=Math.round(bmi * 100) / 100;
			if(bmi>=26){
				$('#bmi-score').css('color','#ff7200');
				$('#bmi-score').text( "" + bmi );
				$('#bmi-title').text( "nadwaga" );
			}
			if(bmi>=20.1&&bmi<=25.9){
				$('#bmi-score').css('color','#8cff00');
				$('#bmi-score').text( "" + bmi );
				$('#bmi-title').text( "prawidłowa waga" );
			}
			if(bmi<=20.0){
				$('#bmi-score').css('color','#00bfff');
				$('#bmi-score').text( "" + bmi );
				$('#bmi-title').text( "niedowaga" );
			}
			console.log(bmi);
			console.log(waga);
		}
	);
	//animacja elementów sekcji about-me od rozdzielczości 576px
	$(window).scroll(function() {
		var x = window.matchMedia("(min-width: 576px)");
		if (x.matches) {
			if ($(document).scrollTop() > 600) {
				$(".move-left").animate({left: '0px'}, 1000, "linear");
				$(".will-appear").animate({opacity: '1'}, 1000, "linear");
			}else{
				$(".move-left").css({left: '-1000px'});
				$(".will-appear").css({opacity: '0'});			
			}
			if ($(document).scrollTop() > 2200) {
				$(".will-appear-2").animate({opacity: '1'}, 1000, "linear");
			}else{
				$(".will-appear-2").css({opacity: '0'});
			}
			if ($(document).scrollTop() > 3600) {
				$(".move-up").animate({top: '0px'}, 500, "linear");
			}else{
				$(".move-up").css({top: '500px'});
			}
		}
	});
});
//wyświetlanie opinii
window.onload = function(e) {
	var timer=0;
    function comments() {
		if(timer<0){
			timer=200;
		}
		if(timer<300){
			timer+=1;
		}
		if(timer>=300){
			timer=0;
		}
        if(timer>=0&&timer<=100){
			$("#comment-1").css('display', 'flex');
			$("#comment-2").css('display', 'none');
			$("#comment-3").css('display', 'none');
		}
		if(timer>=100&&timer<=200){
			$("#comment-1").css('display', 'none');
			$("#comment-2").css('display', 'flex');
			$("#comment-3").css('display', 'none');
		}
		if(timer>=200&&timer<=300){
			$("#comment-1").css('display', 'none');
			$("#comment-2").css('display', 'none');
			$("#comment-3").css('display', 'flex');
		}
	}
	function classToggle() {
		const navs = document.querySelectorAll('.navbar-items')
		navs.forEach(nav => nav.classList.toggle('navbar-links-show'));
	}
//operacje na strzałkach do przewijania opinii
document.querySelector('.navbar-links-toggle')
	.addEventListener('click', classToggle);
		$('#btn-arrow-left').click(
			function(){
				timer-=100;
			}
		);
		$('#btn-arrow-right').click(
			function(){
				timer+=100;
			}
		);
	    setInterval(comments, 100);
}
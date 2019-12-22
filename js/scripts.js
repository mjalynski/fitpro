$(document).ready(function() {
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
	$(window).scroll(function() {
		var x = window.matchMedia("(min-width: 576px)")
		if (x.matches) {
			if ($(document).scrollTop() > 600) {
				$(".content-1").animate({left: '0px'}, 1000, "linear");
				$(".content-2").animate({opacity: '1'}, 1000, "linear");
			}else{
				$(".content-1").css({left: '-1000px'});
				$(".content-2").css({opacity: '0'});			
			}
		}
	});
});
window.onload = function(e) {
  document.getElementById('input_mass').value = '';
   document.getElementById('input_height').value = '';
	var timer=0;
    function comments() {
	if(timer<0){timer=200;}
	if(timer<300){timer+=1;}
	if(timer>=300){timer=0;}
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

document.querySelector('.navbar-links-toggle')
  .addEventListener('click', classToggle);
		$('#btn-arrow-left').click(function(){timer-=100;});
		$('#btn-arrow-right').click(function(){timer+=100;});
	    setInterval(comments, 100);
}


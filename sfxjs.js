/*

This code was used on smartfxtechnology.com. Part of the javascript uses a geotargeting API to display specific content for certain countries.

*/


$(document).ready(function() {
	$('#my-slideshow').bjqs({
	'width' : 722,
	'height' : 300,
	'showMarkers' : true,
	'showControls' : true,
	'centerMarkers' : false,
	'useCaptions' : false,
	'nextText': '>',
    'prevText': '<',
	});
	$('.faq-content').hide();
	$('.menu li a').click(		
		function() {
			$(this).next().slideToggle('normal');
		}
	);
	$('.usa').addClass("hidden");
	$('.yes').click(		
		function() {
			$('.other').fadeOut(500).addClass('hidden');
			$('.usa').fadeIn(500).removeClass('hidden');
		}
	);
	$('.other').addClass("hidden");
	$('.no').click(		
		function() {
			$('.usa').fadeOut(500).addClass('hidden');
			$('.other').fadeIn(500).removeClass('hidden');
		}
	);

	function InOut( elem )
	{
	 elem.delay()
		 .fadeIn(1200)
		 .removeClass("current")
		 .delay(3000)
		 .addClass("current")
		 .fadeOut(
				   function(){
					   if(elem.next().length > 0)
					   {InOut( elem.next() );}
					   else
					   {InOut( elem.siblings(':first'));}
							 
					 }
				 );
	}

	$(function(){
	$('.rotator-list li').hide();
	InOut( $('.rotator-list li:first') );

	});
	$('#my-slideshow li').click(function(){
		window.location=$(this).find("a").attr("href");
		return false;
	}); 
	//$("a.backtest").hover(function(){$("span.backtest-msg").fadeIn(500).removeClass("hidden");},function(){$("span.backtest-msg").fadeOut(500);});
	$(".eurusd").hover(function(){$(this).find("span.backtest-msg").fadeIn(500).removeClass("hidden");},function(){$(this).find("span.backtest-msg").fadeOut(500);});
	$(".euraud").hover(function(){$(this).find("span.backtest-msg").fadeIn(500).removeClass("hidden");},function(){$(this).find("span.backtest-msg").fadeOut(500);});
	$(".eurcad").hover(function(){$(this).find("span.backtest-msg").fadeIn(500).removeClass("hidden");},function(){$(this).find("span.backtest-msg").fadeOut(500);});
	$(".eurchf").hover(function(){$(this).find("span.backtest-msg").fadeIn(500).removeClass("hidden");},function(){$(this).find("span.backtest-msg").fadeOut(500);});
	$(".eurgbp").hover(function(){$(this).find("span.backtest-msg").fadeIn(500).removeClass("hidden");},function(){$(this).find("span.backtest-msg").fadeOut(500);});
	$(".usdjpy").hover(function(){$(this).find("span.backtest-msg").fadeIn(500).removeClass("hidden");},function(){$(this).find("span.backtest-msg").fadeOut(500);});


	$('.expand1').click(		
		function() {
			$('.box1').toggle('slow');
		}
	);
	$('.expand2').click(		
		function() {
			$('.box2').toggle('slow');
		}
	);
	$('.expand3').click(		
		function() {
			$('.box3').toggle('slow');
		}
	);

	/* add country to group 2 
		this section of code is used to control what certain countries see on the website
	*/
	
	var redirect = (function () {
	 
		var onSuccess = function (geoipResponse) {

			var code = geoipResponse.country.iso_code;
	 
			if(code == "BR" || code == "TH" || code == "HU" || code == "SG" || code == "IN" || code == "ID"  || code == "MY" || code == "PL"){
				$('.group1').addClass("hidden"); 
				$('.group2').removeClass("hidden");
			}
			
			/* specifically target brasil to remove certain brokers */
			if(code == "BR"){
				$('brasil').removeClass("hidden");
			}
			
			/* specifically target usa to remove certain brokers in a chunk */
			if(code == "US"){
				$('.other-country').addClass("hidden");
				$('.us-only').removeClass("hidden");
			}
		};
		var onError = function (error) {
			console.log("Error not reading country");
		};
	 
		return function () {
			geoip2.country( onSuccess, onError );
		};
	}());
	 
	redirect();
}); 
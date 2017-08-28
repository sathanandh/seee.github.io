/* 
*	Custom jQuery.
*	Other script located in the EightDegree Shortcodes Plugin. 
*	eightdegree-shortcodes/js/eightdegree-shortcodes-script.js 
*/
	
jQuery(document).ready(function($) {
"use strict";  
/*-----------------------------------------------------------------------------------*/
/* Navigation
/*===================================================================================*/
	


	var mainNav = $('.mainnav'),
		superSliderHome = $('#superslider_home'),
		home = $('#main > div:first-child'),
		about = $('#main > div:nth-child(2)'),
		xMove, barWidth, realtop, aboveHeight, halfHeight;	
		$(".mainnav").removeClass('mainnavhide');	
	

	if( $('#wpadminbar').length )
	{
		var wpadminbar = '-' + $('#wpadminbar').outerHeight() + 'px';
		superSliderHome.css('margin-top',wpadminbar);
	}
	
	/*Setup External Links*/

	$('.nav-links li a').addClass('external');
 	$('.nav-links li.active-children > a').removeClass('external');
    $('.nav-links li.current-menu-item > a').removeClass('external');
 	$('.nav-links li.page-section-parent > a').removeClass('external');
	
	
 	/*Remove Empty Containers*/
	$('.grid').each(function(){
		if($(this).html() == false){
			$(this).remove();
		}
	});
	
	/*Smooth Scrolling*/
	$('.nav-links').onePageNav({
		currentClass: 'nav-active',
		scrollThreshold: 0.5,
		scrollSpeed: 800,
		scrollOffset: 69,
		filter: ':not(.external)'
	}); 
	if($('body').hasClass('home')){
		$('.mainLogo a, .footerLogo').click(function(event){
			 event.preventDefault();
			$('html, body').animate({scrollTop: 0}, 800);
		});
	}
	$('.button').click(function(event){
		var link = $(this).attr('href');
		if(link.indexOf("#") >= 0){
			event.preventDefault();
			$('html, body').animate({scrollTop: $(link).offset().top - 70}, 800);
		}
	});
	$('#scroll-top').click(function(){
		$('html, body').animate({scrollTop: 0}, 800);
	});

	/*Mobile Navigation Dropdown*/
	$("#menubutton").click(function(){
		
		if( $('.mainnav').is("[style*='position: absolute;']")){
			$(".nav-links").slideToggle();
			$('html, body').animate({scrollTop: home.outerHeight()}, 800);
		} 
		else{
			$(".nav-links").slideToggle();
		}
	});

	$(".nav-links a").click(function(){
		if($(window).width() <= 768) {
			$(".nav-links").css('display','none');
		}
	});

	/*Sticky Navigation*/
	function stickyNav(){
		//NEW
		if( $('#superslider_home').length && menu_style != 'top' || $('.rev_slider_wrapper').length && menu_style != 'top'){
			
			if(menu_style == 'below'){
				aboveHeight = home.outerHeight();
				if( $('#wpadminbar').length ){
					var wpadminbar = $('#wpadminbar').outerHeight();
					aboveHeight = home.outerHeight() - wpadminbar;		
				}
				var navHeight = $(".mainnav").outerHeight();
				$('#superslider_home').css('margin-bottom', navHeight)
			}
			else{
				aboveHeight = home.outerHeight() - $(".mainnav").outerHeight();
				if( $('#wpadminbar').length ){
					var wpadminbar = $('#wpadminbar').outerHeight();
					aboveHeight = home.outerHeight() - $(".mainnav").outerHeight() - wpadminbar;		
				}

			}
			if ($(window).scrollTop() > aboveHeight){
				mainNav.removeAttr( 'style' );
				mainNav.css({'position':'fixed', 'top':'0px'});
				if( $('#wpadminbar').length ){
					var wpadminbar = $('#wpadminbar').outerHeight() + 'px';
					mainNav.css({'position':'fixed', 'top': wpadminbar});
					if($(window).width() <= 585) {
						mainNav.css({'position':'fixed', 'top': '0'});
					}			
				}
			}
			else if($(window).scrollTop() < aboveHeight ) {
				mainNav.removeAttr( 'style' );
				mainNav.css({'position':'absolute', 'top': aboveHeight});
				if( $('#wpadminbar').length ){
					var wpadminbar = $('#wpadminbar').outerHeight();
					mainNav.css({'position':'absolute', 'top': aboveHeight + wpadminbar});	

				}
			}
		}
		else if($('#wpadminbar').length || menu_style == 'top'){
			mainNav.css({'position':'fixed','top': $('#wpadminbar').outerHeight()});	

		}

	}
	stickyNav(); 
	
	
	$(window).load(function(){

		setTimeout(function() {
	    	stickyNav();

	  	}, 50);
	});
	$(window).scroll(function() {
		stickyNav();
	});
	$(window).resize(function() {

		if($(window).width() > 768) {
			$(".nav-links").removeAttr("style");

		}
		setTimeout(function() {
	    	stickyNav();
	  	}, 11);
		
	});

});











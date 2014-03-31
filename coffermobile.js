$(document).ready(function(){
	$('.move').mouseenter(function(){
		$(this).css({marginBottom:'10px'});
	});
	$('.move').mouseleave(function(){
		$(this).css({marginBottom:'0px'});	
	});
});
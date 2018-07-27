$(window).ready(function() {
    $('#loading').hide(5000);
    $('.menuicon').click(function(){
		$(this).toggleClass('open');
		$('.menu').toggleClass('open');

    });
    $('.menu > ul > li > a').click(function(){
		$('.menu , .menuicon').toggleClass('open');
    });
});
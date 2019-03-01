$(document).ready(function(){

 $('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');

});

$(window).scroll(function(){
  parallax();

});



});

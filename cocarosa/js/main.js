$(document).ready(function(){  
  var $root = $('html, body');
  
  /* GO-DOWN animation button */
  $('.go-down').on('click', function() {
     $root.animate({
        scrollTop: $('.desc-container').offset().top
    }, 500);
    return false;
  });
  
  /* NAVBAR link animation */
  $('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);

    return false;
  });  
  
  /* Change sex */
  $('#sex-u, #sex-d, #sex-a').click(function() {
    $('.sex').removeClass('active');
    $(this).addClass('active');
  });
  
  /* show more information div on CONCORSO */
  $('#informazioni-concorso').on('click', function() {
    $('.concorso-info-container').css('top', '0');
    $('.concorso-info-content').css('top', '50px');
  });
  
  /* hide more information div on CONCORSO */
  $('.btn-chiudi-info').on('click', function() {
    $('.concorso-info-container').css('top', '100vh');
    $('.concorso-info-content').css('top', '0');
  });
});
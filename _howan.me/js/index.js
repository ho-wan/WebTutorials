$(document).ready(function(){
  // Smooth scroll
  const scroll_speed = 800;
  const target_offset = -70;
  $(".link-smooth").on('click', function(event) {
    let dest = $(this).attr("dest");
      $('html, body').animate({
        scrollTop: $('#' + dest).offset().top + target_offset
      }, scroll_speed);
  });
});

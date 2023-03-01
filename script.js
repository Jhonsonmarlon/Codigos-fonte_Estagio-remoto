
  $(document).ready(function() {
    $('header').mouseenter(function() {
      $(this).animate({padding: '30px'}, 200);
    });
    $('header').mouseleave(function() {
      $(this).animate({padding: '20px'}, 200);
    });
  });
  
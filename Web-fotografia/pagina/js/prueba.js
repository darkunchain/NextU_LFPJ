$('#navicon').click(function() {
  $('body').toggleClass('menuOn');
});

$(window).resize(function() {
  if ($(window).width() > 780) {
    $('body').removeClass('menuOn');
  }
});

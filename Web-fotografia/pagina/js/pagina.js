$('#boton').click(function() {
  $('body').toggleClass('menuOn');
});

$(window).resize(function() {
  if ($(window).width() > 420) {
    $('body').removeClass('menuOn');
  }
});

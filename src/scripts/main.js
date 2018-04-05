$(document).ready( function(){
  // When the page has loaded
  
  setTimeout(() => {
    $('.loading__content__percent').hide(0)
    $('.loading__content__welcome').fadeIn(300)
  }, 1000)

  setTimeout(() => {
    $('#loading').fadeOut(1000)
  }, 2000)
  
});

$(function(){
  $('.modal__close').on('click', function() {
    $(this).closest('#modal').fadeOut(300);
  })
});
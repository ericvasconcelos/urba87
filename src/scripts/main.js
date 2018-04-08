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
    $(this).closest('.js-modal').fadeOut(300);
  })

  $('.location__filter__item').on('click', function() {
    $('.location__filter__item').removeClass('active')
    $(this).addClass('active')
    $('.js-map').attr('src', `./images/mapa-${$(this).data('filter')}.jpg`)
  })

  // Perspective
  $('.perspective__video').on('click', function() {
    $('.js-modal').fadeIn(300);
  })

  $('.perspective__carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    onChanged(event) {
      $('.carousel-dot').removeClass('active')
      $('.carousel-dot').eq(event.item.index).addClass('active')
    }
  })

  $('.carousel-dot').on('click', function() {
    $('.carousel-dot').removeClass('active')
    const $this = $(this)
    const carousel = $('.perspective__carousel').data('owl.carousel');
    const index = $this.data('index')

    $this.addClass('active')
    carousel.to(index)
  })
});
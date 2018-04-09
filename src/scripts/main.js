const pathname = window.location.pathname

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

  // Home
  if (pathname === '/') {
    const doc = document;
    var mouseWheelEvt = function (event) {
      if (doc.querySelector('.row').doScroll)
        doc.querySelector('.row').doScroll(event.wheelDelta>0?"left":"right");
      else if ((event.wheelDelta || event.detail) > 0)
        doc.querySelector('.row').scrollLeft -= 30;
      else
        doc.querySelector('.row').scrollLeft += 30;

      return false;
    }
    doc.querySelector('.row').addEventListener("mousewheel", mouseWheelEvt);


    $('.perspective__carousel').owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: true,
      dots: false
    })
  }

  // Plantas
  if (pathname === '/plantas.html') {
    $('.header, .row').hide();

    $('.plant__introduction__item').on('click', function() {
      const type = $(this).data('type')
      $('.content').removeClass('content--no-header')
      $('.plant__introduction').hide();
      $('.header, .row').fadeIn(300);
    })


    $('.select__plant, .select__space__infos').on('click', function() {
      $(this).toggleClass('active');
    })

    $(document).mouseup(function(e) {
    var container = $('.select');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('active');
      }
    });

    $('.plant__carousel').owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: true,
      dots: false
    })
  }
  

  // Perspectivas
  if (pathname === '/perspectivas.html') {
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
  }


  // Localização
  $('.location__filter__item').on('click', function() {
    $('.location__filter__item').removeClass('active')
    $(this).addClass('active')
    $('.js-map').attr('src', `./images/mapa-${$(this).data('filter')}.jpg`)
  })
  
});
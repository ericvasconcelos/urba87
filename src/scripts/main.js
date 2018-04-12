const pathname = window.location.pathname


if (pathname === '/' || pathname === '/6d/urba/') {
  $(document).ready( function(){
    // When the page has loaded
    let percent = 0;
    var bar1 = new ldBar(".ldBar");
    var bar2 = $('.ldBar').ldBar;

    const calcPercent = setInterval(() => {
      if (percent !== 100) {
        bar1.set(percent += 1);
        $('.loading__content__percent').text((percent += 1) + '%')
      } else {
        clearInterval(calcPercent)
        $('.loading__content__percent').hide(0)
        $('.loading__content__welcome').fadeIn(300)

        setTimeout(() => {
          $('#loading').fadeOut(500)
        }, 3000)
      }
    }, 30)
  });
}

$(function(){
  $('.modal__close').on('click', function() {
    $(this).closest('.js-modal').fadeOut(300)
    $('.frame__wrapper, .js-modal img').hide()
  })

  $('.js-open-modal').on('click', function() {
    $('.js-modal').fadeIn(300)
    const item = $(this).data('item')
    if (item === 'video') {
      $('.modal__video').show()
    } else if (item === 'casarao') {
      $('.img-casarao').show()
    } else if (item === 'rooftop') {
      $('.img-rooftop').show()
    }
  })

  // Home
  if (pathname === '/' || pathname === '/6d/urba/') {
    $('.steps').show()

    const renderScroll = function() {
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

      const natural = $('#natural').offset().left
      const casarao = $('#casarao').offset().left
      const rooftop = $('#rooftop').offset().left
      const art = $('#art').offset().left
      const endScroll = $('.end-scroll').offset().left

      const anchorScrollLeft = function(pos) {
        let positionAnchor
        if (pos === 1) {
          positionAnchor = natural
        } else if (pos === 2) {
          positionAnchor = casarao
        } else if (pos === 3) {
          positionAnchor = rooftop
        } else if (pos === 4) {
          positionAnchor = art
        } else if (pos === 5) {
          positionAnchor = endScroll
        }

        $('.overscroll')
          .find('.row')
          .animate(
            {scrollLeft: positionAnchor - 30}, 800);

        setTimeout(function() {
          $('.count').text('0' + position)
        }, 800)
        
        return false;
      }

      let position = 1;
      $('.steps__back').on('click', function() {
        if (position !== 1) {
          position -= 1
        }

        anchorScrollLeft(position)
      })

      $('.steps__foward').on('click', function() {
        if (position !== 5) {
          position += 1
        }

        anchorScrollLeft(position)
      })

      $('.row').on('scroll', function(e) {
        let scrollPosition = $(this).scrollLeft()
        if (scrollPosition <= 30) {
          position = 1
        } else if (scrollPosition <= casarao) {
          position = 2
        } else if (scrollPosition <= rooftop) {
          position = 3
        } else if (scrollPosition <= art) {
          position = 4
        } else if (scrollPosition <= endScroll) {
          position = 5
        }

        $('.count').text('0' + position)
      })
    }

    $('.introduction__ahead__go').on('click', function() {
      $('.introduction').hide()
      $('.content').removeClass('content--no-header')
      $('.header, .overscroll').fadeIn(300);
      $('.slider').slider({ instructionText: "Deslize para ver a foto" })
      renderScroll()
    })

    $('.celebrate__carousel').owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: true,
      dots: false,
      onChanged(event) {
        $('.celebrate__dot').removeClass('active')
        $('.celebrate__dot').eq(event.item.index).addClass('active')
      }
    })

    $('.celebrate__dot').on('click', function() {
      $('.celebrate__dot').removeClass('active')
      const $this = $(this)
      const carousel = $('.celebrate__carousel').data('owl.carousel');
      const index = $this.data('index')

      $this.addClass('active')
      carousel.to(index)
    })

    $('.plant__carousel').owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: true,
      dots: false,
      onChanged(event) {
        $('.plant__dot').removeClass('active')
        $('.plant__dot').eq(event.item.index).addClass('active')
      }
    })

    $('.plant__dot').on('click', function() {
      $('.plant__dot').removeClass('active')
      const $this = $(this)
      const carousel = $('.plant__carousel').data('owl.carousel');
      const index = $this.data('index')

      $this.addClass('active')
      carousel.to(index)
    })


    $('.art__carousel').owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: true,
      dots: false,
      onChanged(event) {
        $('.art__dot').removeClass('active')
        $('.art__dot').eq(event.item.index).addClass('active')
      }
    })

    $('.art__dot').on('click', function() {
      $('.art__dot').removeClass('active')
      const $this = $(this)
      const carousel = $('.art__carousel').data('owl.carousel');
      const index = $this.data('index')

      $this.addClass('active')
      carousel.to(index)
    })

  }

  // Plantas
  if (pathname === '/plantas.html' || pathname === '/6d/urba/plantas.html') {
    // $('.header, .row').hide();

    const Masterplans = $('#masterplans')
    const Pavimento = $('#pavimento')
    const title = $('#title')
    const type = $('#type')
    const column = $('#column')
    const area = $('#area')
    const options = $('#options')

    const masterplansList = [
      {
        title: 'Térreo'
      },
      {
        title: 'Cobertura'
      }
    ]

    const masterplansCarousel = function () {
      Masterplans.owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        onChanged: function(event) {
          let index = event.item.index
          if (index !== null && index !== "") {
            console.log()
            title.text(masterplansList[index].title)
          }
        }
      })
    }

    const pavimentoCarousel = function () {
      Pavimento.owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        nav: true,
        dots: false
      })
    }

    $('.plant__introduction__item').on('click', function() {
      const type = $(this).data('type').trim();
      $('.content').removeClass('content--no-header')
      $('.plant__introduction').hide();
      $('.header, .row').fadeIn(300);
      $('select__value').text(type)

      if (type === 'masterplans') {
        Masterplans.show()
        masterplansCarousel()
      } else {
        Pavimento.show()
        pavimentoCarousel()
      }
    })

    $('.select').on('click', function() {
      $(this).toggleClass('active');
    })

    const selectPlant = $('.select__plant')
    const legend = $('#legend')

    selectPlant.find('.select__dropdown__item').on('click', function() {
      let val = $(this).text().trim();
      selectPlant.find('.select__value').text(val);
      $('.plant__carousel').hide()

      if (val === 'masterplans') {
        Masterplans.fadeIn(300);
        masterplansCarousel()
        const masterData = Masterplans.data('owl.carousel')
        masterData.to(0)
        legend.attr('src', '')

      } else if (val === 'pavimento tipo') {
        Pavimento.fadeIn(300);
        pavimentoCarousel()
        const pavData = Pavimento.data('owl.carousel')
        pavData.to(0)
        legend.attr('src', './images/legenda/apto-1.svg')
      }

      $('.plant__carousel').trigger('refresh.owl.carousel');
    })

    const selectSpace = $('.select__space__infos')
    selectSpace.find('.select__dropdown__item').on('click', function() {
      let val = $(this).text().trim();
      selectSpace.find('.select__value').text(val);


    })

    $(document).mouseup(function(e) {
    var container = $('.select');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('active');
      }
    });
    
  }
  

  // Perspectivas
  if (pathname === '/perspectivas.html' || pathname === '/6d/urba/perspectivas.html') {
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
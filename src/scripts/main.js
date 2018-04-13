const pathname = window.location.pathname

const masterplansList = [
  {
    title: 'Térreo'
  },
  {
    title: 'Cobertura'
  }
]

const pavimentoList = [
  {
    legend: './images/legenda/apto-1.svg',
    title: 'Coluna 01',
    type: 'Pavimento TIPO',
    column: '01 e 02',
    area: '68,49m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/coluna1/padrao.jpg'
      },
      {
        name: 'Gisele Taranto',
        img: './images/plantas/pavimento/coluna1/gisele.jpg'
      },
      {
        name: 'Planta Suíte Ampliada',
        img: './images/plantas/pavimento/coluna1/ampliado.jpg'
      },
    ]
  },
  {
    legend: './images/legenda/apto-2.svg',
    title: 'Coluna 02',
    type: 'Pavimento TIPO',
    column: '01 e 02',
    area: '68,49m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/coluna2/padrao.jpg'
      },
      {
        name: 'Gisele Taranto',
        img: './images/plantas/pavimento/coluna2/gisele.jpg'
      },
      {
        name: 'Planta Suíte Ampliada',
        img: './images/plantas/pavimento/coluna2/ampliado.jpg'
      },
    ],
  },
  {
    legend: './images/legenda/apto-3.svg',
    title: 'Coluna 03',
    type: 'Pavimento TIPO',
    column: '03',
    area: '69,44m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/coluna3/padrao.jpg'
      },
      {
        name: 'Planta Suíte Ampliada',
        img: './images/plantas/pavimento/coluna3/ampliado.jpg'
      },
    ],
  },
  {
    legend: './images/legenda/apto-4.svg',
    title: 'Coluna 04',
    type: 'Pavimento TIPO',
    column: '04',
    area: '68,62m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/coluna4/padrao.jpg'
      },
      {
        name: 'Planta Suíte Ampliada',
        img: './images/plantas/pavimento/coluna4/ampliado.jpg'
      },
    ],
  },
  {
    legend: './images/legenda/apto-5.svg',
    title: 'Coluna 05',
    type: 'Pavimento TIPO',
    column: '05',
    area: '68,44m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/coluna5/padrao.jpg'
      },
      {
        name: 'Planta Suíte Ampliada',
        img: './images/plantas/pavimento/coluna5/ampliado.jpg'
      },
    ],
  },
  {
    legend: './images/legenda/apto-6.svg',
    title: 'Coluna 06',
    type: 'Pavimento TIPO',
    column: '06',
    area: '66,84m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/coluna6/padrao.jpg'
      },
      {
        name: 'Planta Suíte Ampliada',
        img: './images/plantas/pavimento/coluna6/ampliado.jpg'
      },
    ],
  },
  {
    legend: './images/legenda/apto-7.svg',
    title: 'Coluna 07',
    type: 'Pavimento TIPO',
    column: '07',
    area: '69,26m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/coluna7/padrao.jpg'
      },
      {
        name: 'Planta Suíte Ampliada',
        img: './images/plantas/pavimento/coluna7/ampliado.jpg'
      },
    ],
  },
  {
    legend: './images/legenda/cobertura.svg',
    title: 'Cobertura',
    type: 'Pavimento TIPO',
    column: '01 e 02',
    area: 'Coluna 01: 141,83m² | Coluna 02: 138,30m²',
    options: [
      {
        name: 'Planta padrão',
        img: './images/plantas/pavimento/cobertura/cobertura.jpg'
      }
    ],
  }
]



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
    $('.menu-home').addClass('active');

    // $('.introduction').on('mousewheel', function(e){
    //   if(!(e.originalEvent.wheelDelta/120 > 0)) {
    //     $('#first-scroll').removeClass('go-left')
    //     $('.introduction').addClass('go-left')
    //   }
    // });


    const renderScroll = function() {
      const doc = document;
      var mouseWheelEvt = function (event) {
        console.log('teste')
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
            {scrollLeft: positionAnchor - 40}, 800);

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
    $('.menu-plantas').addClass('active');
    $('.header').hide();

    const Masterplans = $('#masterplans')
    const Pavimento = $('#pavimento')
    const legend = $('#legend')
    const titleMaster = $('#title-master')
    const titlePav = $('#title-pav')
    const type = $('#type')
    const column = $('#column')
    const area = $('#area')
    const options = $('#options')

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
            titleMaster.text(masterplansList[index].title)
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
        dots: false,
        onChanged: function(event) {
          let index = event.item.index
          if (index !== null && index !== "") {
            legend.attr('src', pavimentoList[index].legend)
            titlePav.text(pavimentoList[index].title)
            type.text(pavimentoList[index].type)
            column.text(pavimentoList[index].column)
            area.text(pavimentoList[index].area)
            $('.select__space__infos')
              .find('.select__value')
              .text(pavimentoList[index].options[0].name)

            Pavimento
              .find('.owl-item')
              .eq(index)
              .find('img')
              .attr('src', pavimentoList[index].options[0].img)

            options.empty()
            pavimentoList[index].options.map(function(item) {
              options.append(`<div class="select__dropdown__item" data-img="${item.img}" data-index="${index}">${item.name}<div>`)
            })
          }
        }
      })
    }

    $('.plant__introduction__item').on('click', function() {
      const type = $(this).data('type').trim();
      $('.plant__introduction').hide();
      $('.header, .content').fadeIn(300);
      $('.select__plant').find('.select__value').text(type)

      if (type === 'masterplans') {
        Masterplans.fadeIn(300)
        $('.plant__space__infos').hide()
        $('.plant__masterplans__infos').show()
        masterplansCarousel()
        const masterData = Masterplans.data('owl.carousel')
        masterData.to(0)
        legend.attr('src', '')
      } else {
        Pavimento.fadeIn(300)
        $('.plant__masterplans__infos').hide()
        $('.plant__space__infos').show()
        pavimentoCarousel()
        const pavData = Pavimento.data('owl.carousel')
        pavData.to(0)
        legend.attr('src', './images/legenda/apto-1.svg')
      }
    })

    $('.select').on('click', function() {
      $(this).toggleClass('active');
    })

    const selectPlant = $('.select__plant')

    selectPlant.find('.select__dropdown__item').on('click', function() {
      let val = $(this).text().trim();
      selectPlant.find('.select__value').text(val)
      $('.plant__carousel').hide()

      if (val === 'masterplans') {
        Masterplans.fadeIn(300)
        $('.plant__space__infos').hide()
        $('.plant__masterplans__infos').show()
        masterplansCarousel()
        const masterData = Masterplans.data('owl.carousel')
        masterData.to(0)
        legend.attr('src', '')

      } else if (val === 'pavimento tipo') {
        Pavimento.fadeIn(300)
        $('.plant__masterplans__infos').hide()
        $('.plant__space__infos').show()
        pavimentoCarousel()
        const pavData = Pavimento.data('owl.carousel')
        pavData.to(0)
        legend.attr('src', './images/legenda/apto-1.svg')
      }

      $('.plant__carousel').trigger('refresh.owl.carousel');
    })

    const selectSpace = $('.select__space__infos')
    selectSpace.on('click', '.select__dropdown__item', function() {
      let val = $(this).text().trim();
      let index = $(this).data('index');
      let img = $(this).data('img');
      selectSpace.find('.select__value').text(val)

      Pavimento
        .find('.owl-item.active')
        .find('img')
        .attr('src', img)
    })

    $(document).mouseup(function(e) {
    var container = $('.select');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('active')
      }
    });
    
  }
  

  // Perspectivas
  if (pathname === '/perspectivas.html' || pathname === '/6d/urba/perspectivas.html') {
    $('.menu-perspectivas').addClass('active');
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

  if (pathname === '/ficha-tecnica.html' || pathname === '/6d/urba/ficha-tecnica.html') {
    $('.menu-ficha').addClass('active');
  }

  if (pathname === '/localizacao.html' || pathname === '/6d/urba/localizacao.html') {
    $('.menu-localizacao').addClass('active');

    // Localização
    $('.location__filter__item').on('click', function() {
      $('.location__filter__item').removeClass('active')
      $(this).addClass('active')
      $('.js-map').attr('src', `./images/mapa-${$(this).data('filter')}.jpg`)
    })
  }

  if (pathname === '/contato.html' || pathname === '/6d/urba/contato.html') {
    $('.menu-contato').addClass('active');

    $("input, area").focus(function() {
      $(this).next('.message-error').fadeOut(200)
    });

    const validate = function() {
      if ($('#contact-name').val() === '') {
        $('#contact-name').next('.message-error').fadeIn(200)
        return false;
      }
      
      if ($('#contact-phone').val() === '') {
        $('#contact-phone').next('.message-error').fadeIn(200)
        return false;
      }

      if ($('#contact-email').val() === '') {
        $('#contact-email').next('.message-error').fadeIn(200)
        return false;
      }

      if ($('#contact-message').val() === '') {
        $('#contact-message').next('.message-error').fadeIn(200)
        return false;
      }
      
      $('#contact-name').val('')
      $('#contact-phone').val('')
      $('#contact-email').val('')
      $('#contact-message').val('')

      return true;
    }

    $('#contact__submit').on('click', function(e) {
      e.preventDefault()

      if (validate()) {
        $('#contact__response').fadeIn(300).delay(3000).fadeOut(300);
      }
    })
  }


});
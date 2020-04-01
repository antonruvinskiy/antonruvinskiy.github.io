$(document).ready(function(){
    /* Slick */
    $('.about__carusel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    })
    
    
    
    /* Плавный переход к якорю */
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    /* carousel-3d */
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        autoplay: {
            delay: 4000,
          },
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    
      /* Кнопка Наверх */
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });
    $('#upbutton').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });
    
    /* Карусель Отзывы */
    $('.otziv__carusel').slick({
        dots: false,
        slidesToShow: 1,
        autoplay: true,
      });
})
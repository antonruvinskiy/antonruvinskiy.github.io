$(document).ready(function(){
    /* Slick */
    $('.content__tube').slick({
      dots: false,
      slidesToShow: 1,
      autoplay: false,
      fade: true,    
      arrows: false,
      infinite: true,
      asNavFor: ".content__slick",
    })
       
    /* Карусель YouTube */
    $('.content__slick').slick({
        dots: false,
        slidesToShow: 2,
        autoplay: false,
        fade: false,
        infinite: true,
        arrows: true,
        focusOnSelect: true,
        asNavFor: ".content__tube",
      });
      
      $('.dotter').on('mousedown', function () {
        $("iframe").each(function() { 
          var src= $(this).attr('src');
          $(this).attr('src',src);  
      });
      })
      $('.slick-next').on('click', function () {
        $("iframe").each(function() { 
          var src= $(this).attr('src');
          $(this).attr('src',src);  
      });
      })
})
$(document).ready(function(){
    $('.slider_box_4').slick({
      arrows:false,
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'ease'
    });
    $('.slider-dots_box_4 .slider-dots_item_box_4').click(function() {
      var $this = $(this);
      $('.slider_box_4').slick('slickGoTo', $this.data('index'))
    });
});

$(function(){
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        
      });
    $('.cocktail-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        arrows: false,
        dots: false,
        variableWidth: true,
    });
    $('.event-list-wrapper .event-item').each(function(){
      var _this = $(this);
      _this.on('click', function(){
        var DataTarget = $(this).data('target');
        console.log(DataTarget);
        $('.event-inner-item').removeClass('open-item');
        $(`#${DataTarget}`).addClass('open-item');
      });
      $('.close-icon').on('click', function(){
        $('.event-inner-item').removeClass('open-item');
      })
    })
          
});
$(function(){
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        responsive:[
          {
            breakpoint:767,
            settings: {
              centerMode:false,
              slidesToShow:1
            }
          }
        ]
        
      });
    $('.cocktail-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        arrows: false,
        dots: false,
        variableWidth: true,
        responsive:[
          {
            breakpoint:1023,
            settings:{
              centerMode:false,
              slidesToShow:2,
            }
          }, 
          {
            breakpoint:768,
            settings:{
              centerMode:false,
              slidesToShow:1,
            }
          },  
        ]
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
    });
     
});
if($(window).width() <= 1199){
  $(".menu-img").on("click",function(){
    $("body").toggleClass("menu-open");
    $("header nav ul.link-text").slideToggle();
  });
  $("header .nav-menu .nav-text").detach().appendTo(".link-text");
  $("header .nav-menu .btn-blk").detach().appendTo(".link-text");
  $("header .nav-menu .cart-img a").detach().prependTo("header .nav-menu .menu-img");
}   
if($(window).width() <= 767){
  $(".tequilla .text-wrapper").detach().prependTo(".tequilla .container");  
}   
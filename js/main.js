/* Navigation Bar  START.......................*/

$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });

});
/* Navigation Bar  END.......................*/

/* Sli Carousel  START.......................*/
$("div.the_slider").slicarousel();







function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  
  
  $(' .buttonOne').click(function() {
    $('.bulletFirst').css("visibility", "visible");
    $('.firstPop').toggle();
  });
  $(' .buttonTwo').click(function() {
  $('.bulletSecond').css("visibility", "visible");
  $('.secondPop').toggle();
  });
  $(' .buttonThree').click(function() {
  $('.bulletThird').css("visibility", "visible");
  $('.thirdPop').toggle();
  });
  $(' .buttonFour').click(function() {
  $('.bulletFour').css("visibility", "visible");
  $('.fourthPop').toggle();
  });
  $(' .buttonFive').click(function() {
  $('.bulletFive').css("visibility", "visible");
  $('.fifthPop').toggle();
  });
  
  $(' .buttonSix').click(function() {
  $('.bulletSix').css("visibility", "visible");
  $('.sixthPop').toggle();
  });
  
  
  $(' .buttonSeven').click(function() {
    $('.bulletSeven').css("visibility", "visible");
    $('.sevenPop').toggle();
    });
  
    $(' .buttonEight').click(function() {
      $('.bulletEight').css("visibility", "visible");
      $('.eightPop').toggle();
      });
  
      $(' .buttonNine').click(function() {
        $('.bulletNine').css("visibility", "visible");
        $('.ninePop').toggle();
        });
  
  /*section4 owl carousel*/
  $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          items:1,
        nav:true,
        loop:true,
        
    
        });
      });
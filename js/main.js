$(document).ready(function(){
  $('.gl-slider').bxSlider({
  	controls: true
  });

  $('.gl-vacancies-slider').bxSlider({
  	controls: true,
  	slideWidth: 240,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 65,
    pager: false
  });

  // $(".gl-slide-desc a").on("click", function(e){
  //   e.preventDefault();
  //   $($(this).attr('href')).fadeIn();
  //   $("body").css("overflow","hidden");
  // });

  // $(".pop-up-close").on("click", function(e){
  //   e.preventDefault();
  //   $(this).parents(".gl-post-popup").fadeOut().removeClass("open");
  //   $("body").css("overflow","auto");
  // });

  $(".gl-main-nav a").on("click", function(e) {
    e.preventDefault();
    var blockOffset = $($(this).attr('href')).offset().top - 150;
    $('body,html').animate({scrollTop: blockOffset}, 800);
    // $(".gl-main-nav a").removeClass("active");
    // $(this).addClass("active");
  });

  $(".gl-post-link").on("click", function(e) {
    e.preventDefault();

    var $postLink = $($(this).attr('href'));

    if ($postLink.hasClass('gl-post-open')) {
      $postLink.slideUp().removeClass('gl-post-open');
    } else {
      $postLink.parents('.gl-hero').find('.gl-post').slideUp().removeClass('gl-post-open');
      $postLink.slideDown().addClass('gl-post-open');
    };
  });

  // jQuery.fn.extend({
  //   gl_paralax: function ($obg) {
  //     // target: string
  //     // cof: number

  //     var selector = $(this);

  //     $(window).on('scroll', function(){
  //       if (selector.offset().top <= $(window).scrollTop()) {
  //         if ($obg.target == '' || $obg.target == undefined) {
  //             selector.each(function(){
  //               $(this).css('background-position', 'center '+0.5*($(window).scrollTop()-selector.offset().top)+'px');
  //             });
  //         } else {
  //           selector.css('background-position', 'center '+0.5*($(window).scrollTop()-selector.offset().top)+'px');
  //         };
  //       } else {
  //         if ($obg.target == '' || $obg.target == undefined) {
  //             selector.each(function(){
  //               $(this).css('background-position', 'center 0px');
  //             });
  //         } else {
  //           selector.css('background-position', 'center 0px');
  //         };
  //       }
  //     });
  //   }
  // });

  $(window).on('scroll', function(){
    if ($('.gl-hero.-top').offset().top <= $(window).scrollTop()) {
        $('.gl-hero.-top').find('.gl-slide').css('background-position', 'center '+0.2*($(window).scrollTop()-$('.gl-hero.-top').offset().top)+'px');
    } else {
      $('.gl-hero.-top').find('.gl-slide').css('background-position', 'center 0px');
    }

    if ($('.gl-hero.-company').offset().top <= $(window).scrollTop()) {
        $('.gl-hero.-company').find('.gl-slide').css('background-position', 'center '+0.2*($(window).scrollTop()-$('.gl-hero.-company').offset().top)+'px');
    } else {
      $('.gl-hero.-company').find('.gl-slide').css('background-position', 'center 0px');
    }

    if ($('.gl-contacts-pic').offset().top <= $(window).scrollTop()) {
        $('.gl-contacts-pic').css('background-position', 'center '+0.2*($(window).scrollTop()-$('.gl-contacts-pic').offset().top)+'px');
    } else {
      $('.gl-contacts-pic').css('background-position', 'center 0px');
    }
  });

  // $('.gl-contacts-pic').gl_paralax({});
  // $('.gl-slide').gl_paralax({});
});
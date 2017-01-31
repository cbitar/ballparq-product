$(function(){
    var banner = $('.banner-selected').children('.banner-item').attr('for');

    $('.banner-item').click(function(){
      var trigger = $(this).attr('for');
      var parent  = $(this).parent();

      $('.banner').removeClass('banner-selected');
      parent.addClass('banner-selected');
    });
  })

"use strict";

(function ($, window, undefined) {
  $(window).on("load resize scroll", function () {
    var wpos = $(window).scrollTop();
    var wh = $(window).height();
    var mvp = wpos + wh;
    var bo = $("body").offset().top;
    var scrollWindow = $(window).scrollTop();
    var windowHeight = $(window).height();
    $(".fade-box").each(function () {
      var targetPosition = $(this).offset().top;

      if ($(window).width() > 768) {
        if (scrollWindow > targetPosition - windowHeight + 300) {
          $(this).addClass("fade");
        }
      } else {
        if (scrollWindow > targetPosition - windowHeight + 100) {
          $(this).addClass("fade");
        }
      }
    });
  });
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    var $nav = $('.nav');

    if ($nav.hasClass('close')) {
      $nav.removeClass('close');
      $nav.addClass('open');
    } else if ($nav.hasClass('open')) {
      $nav.removeClass('open');
      $nav.addClass('close');
    }
  });
})(jQuery, window);
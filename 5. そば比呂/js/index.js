"use strict";

(function ($, window, undefined) {
  var bannerOpts = {
    mode: 'fade',
    pager: false,
    controls: false,
    auto: true,
    minSlides: 1,
    maxSlides: 1,
    speed: 1000,
    pause: 4000,
    useCSS: false,
    preloadImages: 'all',
    responsive: true
  };
  var banner = $(".banner__slider").bxSlider(bannerOpts);
})(jQuery, window);
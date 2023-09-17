$(function () {
  "use strict";

  $(window).on("scroll", function () {
    var sc = $(window).scrollTop();

    console.log(sc);

    if (sc > 1000) {
      $("div").fadeIn(1000);
    } else {
      $("div").fadeOut(1000);
    }
  });
});

$(function () {
  "use strict";
  //each() ==> loop
  $("li").each(function () {
    if ($(this).hasClass("active")) {
      $(this).parent().parent().css({
        color: "#F00",
      });
    }

    // if ($(this).hasClass("active")) {
    //   $(this).next().css({
    //     color: "#F00",
    //   });
    // }

    // if ($(this).hasClass("active")) {
    //   $(this).prev().css({
    //     color: "#F00",
    //   });
    // }
  });
});

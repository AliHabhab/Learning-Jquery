$(function () {
  "use strict";

  // For clicking on li the have class test
  //   $("li").click(function () {
  //     if ($(this).hasClass("test")) {
  //       $(this).css({
  //         color: "#00F",
  //       });
  //     }
  //   });

  // each() => For Each li have class test
  $("li").each(function () {
    if ($(this).hasClass("test")) {
      $(this).css({
        color: "#00F",
      });
    }
  });
});

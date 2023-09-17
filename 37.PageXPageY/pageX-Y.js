$(function () {
  "use strict";

  //   $("html").mousemove(function (event) {
  //     // $("span").text("X-Axis: " + event.pageX + " Y-Axis: " + event.pageY);
  //   });

  $("html").click(function (event) {
    $(".circle").show().offset({
      left: event.pageX,
      top: event.pageY,
    });
  });
});

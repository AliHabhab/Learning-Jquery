$(function () {
  "use strict";

  $("button").click(function (event) {
    $("span")
      .text("Hello Message From jQuery")
      .fadeIn(1000)
      .delay(3000)
      .fadeOut(1000);
  });
});

$(function () {
  "use strict";

  $("a").on("click", function (event) {
    event.preventDefault();
    // $("img").fadeIn(500);
    if (event.isDefaultPrevented()) {
      $("div").text("The Link Will Not Work");
    } else {
      $("div").text("The Link Will Go To Google");
    }
  });
});

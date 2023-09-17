$(function () {
  "use strict";
  //wrap() => need html structure
  $(".add").click(function () {
    $("span").wrap("<div></div>");
  });

  $(".remove").click(function () {
    $("span").unwrap();
  });
});

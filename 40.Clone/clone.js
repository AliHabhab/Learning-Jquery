$(function () {
  "use strict";
  //   clone() => true | false | ()
  $("button").on("click", function (event) {
    // $("div").clone().appendTo("body");
    $(".main").clone(true).appendTo("body");
  });

  $(".main").on("click", function () {
    $(this).css({
      color: "#F00",
    });
  });
});

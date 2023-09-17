$(function () {
  "use strict";

  //   $("input").on("keydown", function () {
  //     $("div").text("You Are Going To Click The KeyBoard Key");
  //   });

  //   $("input").on("keypress", function () {
  //     $("div").text("You Are Pressed The KeyBoard Key");
  //   });

  $("input").on("keyup", function () {
    $("div h3").text($(this).val());
  });

  $("textarea").on("keyup", function () {
    $("div p").text($(this).val());
  });
});

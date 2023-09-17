$(function () {
  "use strict";

  $("input").on("change", function () {
    $("div h3").text($(this).val());
  });

  $("textarea").on("change", function () {
    $("div p").text($(this).val());
  });

  $("select").on("change", function () {
    // $("div").css({
    //   backgroundColor: "#0F0",
    // });

    $("div").text("You Have Choosed To Buy " + $(this).val());
  });
});

$(function () {
  "use strict";
  $("section").height($(window).height() - "300");
  $(window).on("resize", function () {
    $("section").height($(window).height() - "300");
    var wid = $(window).width();
    var hei = $(window).height();

    console.log(wid + "-" + hei);
    if (wid > 900) {
      console.log("Your Screen Is Bigger Than 900px");
    }
    if (wid < 569) {
      $("div").removeClass("hidden");
    } else {
      $("div").addClass("hidden");
    }
  });
});

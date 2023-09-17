$(function () {
  "use strict";

  $("input").on("focus", function () {
    $("div span")
      .fadeIn(1000, function () {
        $(this).fadeOut(2000);
      })
      .text("You Are Focusing In The Input");
  });

  $("input").on("blur", function () {
    if ($(this).val().length > 10) {
      $("div span")
        .fadeIn(1000, function () {
          $(this).fadeOut(2000);
        })
        .text("You Wrote More Then 10");
    } else {
      $("div span")
        .fadeIn(1000, function () {
          $(this).fadeOut(2000);
        })
        .text("Sorry You didn't Write 10 Letters");
    }
  });
});

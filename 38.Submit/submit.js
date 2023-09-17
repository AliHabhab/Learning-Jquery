$(function () {
  "use strict";

  $("form").submit(function (event) {
    if ($("input:first").val() === "CONFIRM") {
      $("span").text("Word Is Ok!").show();

      return;
    }
    $("span").text("Word Not Correct").show().fadeOut(2000);
    event.preventDefault();
  });
});

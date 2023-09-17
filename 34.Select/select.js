$(function () {
  "use strict";
  $("textarea").on("click", function () {
    $(this).select();
  });

  $("textarea").select(function () {
    $(this).after("Text Copied").delay(2000).fadeOut(400);
  });
});

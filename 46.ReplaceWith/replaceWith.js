$(function () {
  "use strict";

  $("div").click(function () {
    $(this).replaceWith(
      "<input type='text' title='Text' value='" + $(this).text() + "'/>"
    );
    $("button").fadeIn(1000);
  });

  $("button").click(function () {
    $("input").replaceWith("<div>" + $("input").val() + "</div>");

    $("button").fadeOut(1000);
  });
});

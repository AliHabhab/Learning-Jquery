$(function () {
  "use strict";
  $("p").one("click dblclick", function () {
    $(this).animate({
      fontSize: "+=3px",
    });
  });
});

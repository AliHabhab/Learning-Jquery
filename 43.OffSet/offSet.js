// $(function () {
//   "use strict";
//   console.log($("div").offset());

//   $("div").offset({
//     left: 200,
//     top: 200,
//   });

//   console.log($("div").offset());
//   console.log($("div").offset().top);
//   console.log($("div").offset().left);
// });

$(function () {
  "use strict";
  $(window).scroll(function () {
    console.log("Scroll Top = " + $(this).scrollTop());

    console.log("Div offset Top = " + $("div").offset().top);

    var scrolling = $(this).scrollTop();
    var divOffset = $("div").offset().top;

    if (scrolling >= divOffset) {
      $("div").css({
        backgroundColor: "#00F",
      });
    }
  });
});

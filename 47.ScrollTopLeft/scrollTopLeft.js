$(function () {
  "use strict";

  $(window).scroll(function () {
    console.log("Window Scroll Top = " + $(this).scrollTop());
    console.log("Test Lesson Offset = " + $(".test-lesson").offset().top);

    if ($(window).scrollTop() >= $(".test-lesson").offset().top) {
      $("div").animate(
        {
          opacity: 1,
        },
        3000
      );
      //   $(".test-lesson").animate(
      //     {
      //       opacity: 1,
      //     },
      //     3000
      //   );
    }
  });

  //   $(window).scrollTop(700);

  $("button").click(function () {
    // $(window).scrollTop(0); // Back to the top of the window

    $(window).scrollTop($(".test-lesson").offset().top); // He will take me back to the top of div 2
  });
});

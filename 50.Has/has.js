$(function () {
  "use strict";
  // has() => for each Paragraph has span put this css properties
  //   $("p").has("span").css({
  //     color: "#F00",
  //   });

  //has(p, span, etc...)
  //   $("p").has("strong").css({
  //     color: "#F00",
  //   });

  //has(class: .test, .custom, etc... | id: #test, #custom, etc...)
  //   $("p, h2, div").has(".test").css({
  //     color: "#F00",
  //   });

  $("p, h2, div").has(".test, span").css({
    color: "#F00",
  });
});

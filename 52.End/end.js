$(function () {
  "use strict";
  //   $("div")
  //     .find("span")
  //     .css({
  //       color: "#00F",
  //     })
  //     .end()
  //     .find("strong")
  //     .css({
  //       color: "#F00",
  //     })
  //     .end()
  //     .css({
  //       fontWeight: "bold",
  //     });

  $("div")
    .find("span")
    .css({
      color: "#00F",
      fontWeight: "bold",
    })
    .end()
    .css({
      color: "#F00",
    });
});

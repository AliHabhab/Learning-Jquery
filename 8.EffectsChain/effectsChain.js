$(document).ready(function () {
  //   var div = $("div");
  //   div.slideUp(2000);
  //   div.slideDown(2000);
  //   div.fadeOut(2000);
  //   div.fadeIn(2000);
  $("div")
    .css({
      background: "#F00",
    })
    .slideUp(2000)
    .slideDown(2000)
    .fadeOut(2000)
    .fadeIn(2000)
    .hide(1000)
    .show(1000)
    .animate({ width: "600px", height: "600px" }, 1000);
});

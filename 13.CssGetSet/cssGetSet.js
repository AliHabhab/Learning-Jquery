// $(document).ready(function () {
//   $("button").click(function () {
//     var color = $("p").css("color");
//     console.log(color);
//     $("input").val(color);
//     $("<span></span>", {
//       text: color,
//     }).appendTo("body");
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     var color = $("input").val(); //You should input the color (#F00) in the input tag
//     $("p").css("color", color);
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").css("background", "#F00");
//   });
// });

$(document).ready(function () {
  $("button").click(function () {
    // var padding = $("input").val();
    var margin = $("input").val();
    $("p").css({
      background: "#F00",
      color: "#000",
      //   padding: padding, // should enter the padding in the input field (20px then GetCss)
      margin: margin, // should enter the margin in the input field (50px then GetCss)
    });
  });
});

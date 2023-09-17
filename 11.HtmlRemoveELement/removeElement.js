// $(document).ready(function () {
//   $("button").click(function () {
//     $("div").hide(); // hide the div FROM UI but stay on DOM
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("div").remove(".jquery"); // Remove the element completely from DOM and UI
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     // Remove the div from UI
//     $("div").fadeOut(2000, function () {
//       $(this).remove(); // Then Remove the div from DOM
//     });
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("div.jquery").empty(); //Empty the content in Div
//   });
// });

$(document).ready(function () {
  $("button").click(function () {
    $("p").remove(":contains('jQuery')"); // Remove the sentence that contains "jQuery" word
  });
});

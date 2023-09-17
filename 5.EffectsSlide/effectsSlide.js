//Slide down

// $(document).ready(function () {
//   $(".open").click(function () {
//     //the box should be with display none
//     // slidedown => (speed, callback)
//     // $(".box").slideDown(2000);
//     // $(".box").slideDown(2000, function () {
//     //   $(".open").hide();
//     // });
//   });
// });

// Slide up

// $(document).ready(function () {
// the box should be displayed
//   $(".open").click(function () {
//     $(".box").slideUp(2000);
//   });
// });

// Slide toggle

$(document).ready(function () {
  $(".open").click(function () {
    $(".box").slideToggle(2000);
  });
});

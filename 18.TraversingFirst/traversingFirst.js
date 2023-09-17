// ---------------First---------------
// $(document).ready(function () {
//   // First Child
//   //   $("div").first().css({
//   //     border: "5px solid #00F",
//   //   });

//   // Next Child For The First Child
// //   $("div").first().next().css({
// //     border: "3px solid #00F",
// //   });
// });
// ---------------LAST---------------
// $(document).ready(function () {
//   // Last Child
//   //   $("div").last().css({
//   //     border: "5px solid #00F",
//   //   });
//   // The Previous Element For The Last Child
//   //   $("div").last().prev().css({
//   //     border: "5px solid #00F",
//   //   });
//   // The All Previous Elements For The Last Child
//   //   $("div").last().prevAll().css({
//   //     border: "5px solid #00F",
//   //   });
// });

// // ---------------EQUAL---------------
// $(document).ready(function () {
//   // Equal Child (index) => (0) = first element (3) Third Element etc...
//   // Equal Child (index) => (-1) = start from the last element
//   //   $("div").eq(-1).css({
//   //     border: "5px solid #00F",
//   //   });

//   //   $("div").eq(-2).next().css({
//   //     border: "5px solid #00F",
//   //   });

//   $("div").eq(-2).prevAll().css({
//     border: "5px solid #00F",
//   });
// });

// ---------------Filter---------------
// $(document).ready(function () {
//   //   $("div").filter(".jquery").css({
//   //     border: "5px solid #00F",
//   //   });
//   //   $("div").filter(".jquery").next().css({
//   //     border: "5px solid #00F",
//   //   });
//   //   $("div").filter(".jquery").prev().css({
//   //     border: "5px solid #00F",
//   //   });
//   //   $("div").filter($(".jquery")).css({
//   //     border: "5px solid #00F",
//   //   });
//    $("div")
//      .filter(function (index) {
//        return index === 3;
//      })
//      .next()
//      .css({
//        border: "5px solid #00F",
//      });

// $("div").filter(":contains('jQuery')").css({
//     border: "5px solid #00F",
//   });
// });

// ---------------Not---------------
$(document).ready(function () {
  //Find the class jquery and skip them
  //   $("div").not(".jquery").css({
  //     border: "5px solid #00F",
  //   });

  //   $("div").not($(".jquery")).css({
  //     border: "5px solid #00F",
  //   });

  //   $("div")
  //     .not(function (index) {
  //       return index === 1;
  //     })
  //     .css({
  //       border: "5px solid #00F",
  //     });

  $("div").not(":contains('jQuery')").css({
    border: "5px solid #00F",
  });
});

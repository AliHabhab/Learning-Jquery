// //One Click
// $(document).ready(function () {
//   $("button").click(function () {
//     // $("p").css("color", "#F00");
//     $(this).css("color", "#F00");
//     // $(this).hide();
//   });
// });

// //double Click
// $(document).ready(function () {
//   $("button").dblclick(function () {
//     $("p").css("color", "#F00");
//     // $(this).css("color", "#F00");
//     // $(this).hide();
//   });
// });

// //Mouse Enter

// $(document).ready(function () {
//   $("button").mouseenter(function () {
//     // $("p").css("color", "#00F");
//     $(this).css("color", "#00F");
//     // $(this).hide();
//   });
// });

// //Mouse Leave

// $(document).ready(function () {
//   $("button").mouseleave(function () {
//     $("p").css("color", "#0F0");
//     // $(this).css("color", "#0F0");
//     // $(this).hide();
//   });
// });

//Hover

$(document).ready(function () {
  $("button").hover(
    // Mouse ON
    function () {
      $("p").css("color", "#10ff");
      $(this).css("color", "#1fF9");
    },
    // Mouse Out
    function () {
      $("p").css("color", "#ff1f");
      $(this).css("color", "#f0f9");
    }
  );
});

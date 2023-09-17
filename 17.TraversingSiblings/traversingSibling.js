// With class (select in html)
// $(document).ready(function () {
//   //   $("div:contains('jQuery')").siblings().css({
//   //     border: "5px solid #00F",
//   //   });
//   //
//   //   $("div:contains('jQuery')").siblings().slideUp(2000);
//   //   $("div").click(function () {
//   //     $(this).siblings().slideUp(2000);
//   //   });
//   $("div, p").click(function () {
//     // $(this).siblings().slideUp(2000);
//     // $(this) => Refer To Div Or P
//     // siblings() => Brothers With Class select
//     $(this).siblings(".select").fadeOut(2000); //FadeOut This Brothers
//   });
// });

// -------------------------------------------------

//Next
// $(document).ready(function () {
//   $("div, p").click(function () {
//     // Next Element
//     // $(this).next().fadeOut(2000);
//     // $(this).next().css({
//     //   background: "#F00",
//     // });
//     // $(this).next().slideUp(2000);
//     $(this).next(".test").slideUp(2000);
//   });
// });

// $(document).ready(function () {
//   $("div, p").click(function () {
//     $(this).nextAll("aside").css({
//       background: "#F00",
//     });
//   });
// });

// $(document).ready(function () {
//   $("div, p, aside").click(function () {
//     $(this).nextUntil("p").css({
//       background: "#F00",
//     });
//   });
// });

//------------------------------------

// Previous
// $(document).ready(function () {
//   $("div, p").click(function () {
//     // $(this).prev(".test").slideUp(2000); //Previous Element
//     $(this).prev().css({
//       background: "#F00",
//     });
//   });
// });

// $(document).ready(function () {
//   $("div, p, aside").click(function () {
//     $(this).prevAll().css({
//       background: "#F00",
//     });
//   });
// });

$(document).ready(function () {
  $("div, p, aside").click(function () {
    $(this).prevUntil("p").css({
      background: "#F00",
    });
  });
});

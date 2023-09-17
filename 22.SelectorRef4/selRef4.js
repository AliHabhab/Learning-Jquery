// :animated Selector
// $(document).ready(function () {
//   //Animate The Div
//   $("div").animate(
//     {
//       width: "500px",
//     },
//     5000
//   );
//   $("div").animate(
//     {
//       height: "300px",
//     },
//     5000
//   );

//   $("p").animate(
//     {
//       width: "500px",
//     },
//     5000
//   );
//   $("h1").click(function () {
//     $(":animated").css({
//       background: "#F00",
//       color: "#FFF",
//     });
//   });
//   $(":animated").css({
//     background: "#00F",
//   });
// });

// // :focus Selector
// $(document).ready(function () {
//   $("input[type='text']").focus();
//   $(":focus").css({
//     padding: "20px",
//   });
// });

// // // :contains Selector
// $(document).ready(function () {
//   $("div:contains('jQuery')")
//     .animate(
//       {
//         width: "500px",
//       },
//       5000
//     )
//     .css({
//       background: "#F00",
//     });
// });

// // :contains Selector
// $(document).ready(function () {
//   $("div:has('.ali')").css({
//     color: "#080",
//   });
// });

// // :empty Selector
// $(document).ready(function () {
//   $(":empty").css({
//     background: "#080",
//   });
// });

// // :parent Selector
// $(document).ready(function () {
//   $(":parent").css({
//     border: "1px solid #F00",
//   });
// });

// // :hidden and visible Selector
// $(document).ready(function () {
//   $("button").click(function () {
//     // $(":hidden").fadeIn(2000);
//     // $("div:visible").css({
//     //   background: "#F00",
//     // });
//     $("div:visible").slideToggle(1000);
//     $("div:hidden").slideToggle(1000);
//   });
// });

// // :root Selector
// $(document).ready(function () {
//   $(":root").css({
//     background: "#080",
//   });
// });

// // :root Selector
$(document).ready(function () {
  $("p:lang(ar)").css({
    color: "#F00",
  });
});

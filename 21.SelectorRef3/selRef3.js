// --------------Only Child---------------
// $(document).ready(function () {
//   $("p:only-child").css({
//     border: "4px solid #00F",
//   });
// });

// --------------Only Of Type---------------
// $(document).ready(function () {
//   $("span:only-of-type").css({
//     border: "4px solid #00F",
//   });
// });

// -------------->Direct Child<---------------
// $(document).ready(function () {
//   $("div > p").css({
//     border: "4px solid #00F",
//   });
// });

// $(document).ready(function () {
//   $("div aside > p").css({
//     border: "4px solid #00F",
//   });
// });

// --------------Parent---------------
// $(document).ready(function () {
//   $("div p").css({
//     border: "4px solid #00F",
//   });
// });

// --------------Siblings---------------
$(document).ready(function () {
  // + => next
  //   $("div + p").css({
  //     border: "4px solid #00F",
  //   });
  // ~ => Siblings
  //div ~ p => need the P Siblings to Div
  //   $("p ~ div").css({
  //     border: "4px solid #00F",
  //   });
  //   $("div + h3").next().css({
  //     border: "4px solid #00F",
  //   });

  //eq(index)
  //   $("ul li:eq(3)").next().css({
  //     border: "4px solid #00F",
  //   });

  //gt(index) => greaterthen (index)
  //   $("ul li:gt(1)").css({
  //     border: "4px solid #00F",
  //   });

  //lt(index) => lessthen (index)
  //   $("ul li:lt(5)").css({
  //     border: "4px solid #00F",
  //   });

  //not() => not (:contains())
  $("ul li:not(:contains('5'))").css({
    border: "4px solid #00F",
  });
});

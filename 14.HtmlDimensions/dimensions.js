// $(document).ready(function () {
//   var dw = $(document).width();
//   console.log(dw);

//   //   if (dw == 1396) {
//   //     console.log("Congratulations :) You Have A big screen");
//   //   } else {
//   //     console.log("Sorry :) You Dont Have A big screen");
//   //   }

//   if (dw == 1396) {
//     $("body").append("<span>Congratulations :)</span>");
//   } else {
//     $("body").append("<span>Sorry :(</span>");
//   }
// });

// $(document).ready(function () {
//   $(".dim").click(function () {
//     $(this).width(300);
//     $(this).text("Your Div Width Is " + $(this).width() + "px");
//     console.log("Your Div Width Is " + $(this).width() + "px");
//   });
// });

// $(document).ready(function () {
//   $(".dim").click(function () {
//     $(this).width("+=" + 50); // With every click the width add 50px to the width
//     $(this).text("Your Div Width Is " + $(this).width() + "px");
//     console.log("Your Div Width Is " + $(this).width() + "px");
//   });
// });

// $(document).ready(function () {
//   $(".left").click(function () {
//     $(this).width("+=" + 50); // With every click the width add 50px to the width
//     $(".right").width("-=" + 50); // With every click the width add 50px to the width
//   });

//   $(".right").click(function () {
//     $(this).width("+=" + 50); // With every click the width add 50px to the width
//     $(".left").width("-=" + 50); // With every click the width add 50px to the width
//   });
// });

// $(document).ready(function () {
//   $(".cont1").click(function () {
//     $(this).width("+=" + 50);
//     $(this).text($(this).width());
//     if ($(this).width() == 700) {
//       $(this).css({
//         // maxWidth: "700px",
//         width: "50px",
//       });
//       console.log("You Cant Add Width Than " + $(this).width() + "px");
//     }
//   });
// });

// inner width => innerWidth working with padding => (with width 300px and padding 20px the innerWidth will be 340px )
// $(document).ready(function () {
//   $(".cont1").click(function () {
//     console.log($(this).innerWidth());
//   });
// });

// outer width => getting the inner and outer width => (360px)
// outer width(true) => getting the whole box even with margin => (400px)
$(document).ready(function () {
  $(".cont1").click(function () {
    console.log($(this).outerWidth(true));
  });
});

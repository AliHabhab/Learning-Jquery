$(function () {
  "use strict";

  $("span").click(function () {
    // if ($(this).parent().is("div")) {
    //   console.log("Yes This Is Div");
    // }

    // if ($(this).is("span")) {
    //   console.log("Yes This Is Span");
    // }

    // if ($(this).parent().is("div ,p")) {
    //   console.log("Yes This Is P || Div");
    // }

    // if ($(this).parent().is(".par")) {
    //   console.log("Yes The Parent Has Class .par");
    // }

    // if ($(this).is(":first-child")) {
    //   console.log("Yes This Is The First Span");
    // } else if ($(this).is("span:eq(1)")) {
    //   console.log("Yes This Is The Second Span");
    // } else {
    //   console.log("Yes This Is The Last Span");
    // }

    if ($(this).is(":contains(1)")) {
      console.log("Yes This Is The First Span");
    } else if ($(this).is(":contains(2)")) {
      console.log("Yes This Is The Second Span");
    } else {
      console.log("Yes This Is The Last Span");
    }
  });
});

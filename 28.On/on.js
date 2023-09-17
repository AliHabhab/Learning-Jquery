// On Syntax (Event, Child Selector: Optional, Data, Function, Map)
$(function () {
  "use strict";
  //single Event With On
  // $(".normal").on("click", function () {
  //   $(this).hide();
  // });

  //Mutli Event With On
  // $(".normal").on("mouseenter mouseleave", function () {
  //   $(this).toggleClass("color");
  // });

  // $("body").on("mouseenter mouseleave", ".normal", function () {
  //   $(this).toggleClass("color");
  // });

  // Custom Event With On
  $(".custom").on(
    "myCustom",
    function (event, myHeight, myWidth, myBack, myColor) {
      // $(this).hide();
      $(this).height(myHeight).width(myWidth).css({
        background: myBack,
        color: myColor,
      });
    }
  );

  $(".cus-event").on("click", function () {
    $(".custom").trigger("myCustom", ["200px", "300px", "#F00", "#0F0"]);
  });

  // $("body").on("myCustom", ".custom", function (event) {
  //   $(this).hide();
  // });

  // $("button").click(function () {
  //   $(".custom").trigger("myCustom");
  // });

  // Event Map With On

  $(".map").on({
    click: function () {
      $(this).text("You Have Clicked Me");
    },
    dblclick: function () {
      $(this).text("You Double Clicked Me");
    },
    mouseenter: function () {
      $(this).text("You Have Mouse On Me");
    },
    mouseleave: function () {
      $(this).text("The Mouse Has Gone Away");
    },
  });

  //Future Elements Event With On

  $(".create").on("click", function () {
    $("<p>This Is Created P</p>").insertAfter($(this));

    // $("p").on("click", function () { // This FadeOut Only THIS P
    //   $(this).fadeOut(1000);
    // });
  });

  $("body").on("click", "p", function () {
    // This FadeOut Every P
    $(this).fadeOut(1000);
  });
});

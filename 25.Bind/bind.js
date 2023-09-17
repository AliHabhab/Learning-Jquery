$(function () {
  "use strict";
  // Single Event With Bind
  $(".normal").bind("click", function () {
    $(this).hide();
  });

  // Mutli Event With Bind
  $(".normal").bind("mouseenter mouseleave", function () {
    $(this).toggleClass("color");
  });

  // Map Event With Bind
  $(".map").bind(
    {
      click: function () {
        $(this).text("You Have Clicked Me");
      },
      dblclick: function () {
        $(this).text("You Have Doubled Clicked Me");
      },
      mouseenter: function () {
        $(this).text("You Have Moused On Me");
      },
      mouseleave: function () {
        $(this).text("The Mouse Has Gone");
      },
    },
    function () {
      $(this).toggleClass("color");
    }
  );

  // Custom Event

  $(".custom").bind("myCustomEvent", function (event, myName, myAge) {
    $(this).text("Hello " + myName + ", Your Age Is: " + myAge);
  });

  $("button").click(function () {
    $(".custom").trigger("myCustomEvent", ["Ali", "22"]); //trigger means to let it work
  });

  // Custom Event Wtih Design

  $(".custom-event").bind(
    "myCustomDesign",
    function (event, myHeight, myWidth, myBack, myColor) {
      $(this).height(myHeight).width(myWidth).css({
        background: myBack,
        color: myColor,
      });
    }
  );

  $("a").click(function () {
    $(".custom-event").trigger("myCustomDesign", [
      "400px",
      "500px",
      "#00F",
      "#F00",
    ]);
  });

  //   $(".normal").mouseenter(function () {
  //     $(this).toggleClass("color");
  //   });

  //   $(".normal").mouseleave(function () {
  //     $(this).toggleClass("color");
  //   });
});

$(document).ready(function () {
  //   console.log($("section").children());
  //   console.log($("div").children());
  //   console.log($("p").children());
  //   $("section").children().css({
  //     border: "1px solid #F00",
  //   });
  //   $("div").children().css({
  //     border: "1px solid #F00",
  //   });
  //   $("p").children().css({
  //     border: "1px solid #F00",
  //   });

  //   $("section").children(".jquery").css({
  //     //Nothing will happen because section doesnt have direct child with class jquery
  //     //Then we add aside with class jquery so will implement the css into it
  //     //because aside is a direct child for section
  //     border: "1px solid #F00",
  //   });
  //   $("div").children(".jquery").css({
  //     //Div have a direct child with class jquery
  //     border: "1px solid #F00",
  //   });

  //find
  //   $("section").find("*").css({
  //     //We can put in find (element, class, object) || ("*") => every element under section
  //     border: "1px solid #F00",
  //   });
  $("section").find($("p:contains('Facebook')")).css({
    border: "1px solid #F00",
  });
});

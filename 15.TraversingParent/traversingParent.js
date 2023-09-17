$(document).ready(function () {
  //   $("span").parent().css("border", "2.5px solid #00F");
  //   $("p").parent().css("border", "2.5px solid #00F");
  //   $("div.top").parent().css("border", "2.5px solid #00F");
  //   $("section").parent().css("border", "2.5px solid #00F");
  //   $("span").parent().css({
  //     padding: "20px",
  //     border: "2.5px solid #00F",
  //     width: "80%",
  //     borderRadius: "10px",
  //   });
  //   $("span").parent().fadeOut(2000).fadeIn(2000);
  //   $("span").parents().css("border", "2.5px solid #F00");
  //   $("p").parents().css("border", "2.5px solid #F00");
  //   $("p").parents(".top").css("border", "2.5px solid #F00");
  //   $("p").parents(".to").css("border", "2.5px solid #F00");
  //   $("span").parentsUntil(".jquery").css("border", "2.5px solid #F00"); // in class jquery will stop
  //   $("span").parentsUntil(".last").css("border", "2.5px solid #F00");
  $("span")
    .parentsUntil(".last")
    .css("border", "2.5px solid #F00")
    .fadeOut(2000)
    .fadeIn(2000);
});

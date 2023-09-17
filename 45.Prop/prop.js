$(function () {
  "use strict";

  $("button").click(function (event) {
    event.preventDefault();
    // console.log($("input").attr("disabled"));

    // $("input").prop("disabled", "enabled");
    // $("input").prop("disabled", "disabled")
    // false => if input have attr disabled will remove it
    // $("input").prop("disabled", false);
    $("input").prop({
      disabled: true,
      name: "My Field",
      id: "#test",
    });
    // console.log($("input").prop("disabled"));
    console.log($("input").prop("id"));
    console.log($("input").prop("name"));
  });
});

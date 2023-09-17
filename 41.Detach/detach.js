$(function () {
  "use strict";
  //   clone() => true | false | ()
  var element = $("div");

  $("#remove").on("click", function () {
    // Remove: When remove() they removed him from all the events, dom and etc ...
    // and when you return them you cant apply the properties (he lost his event)
    // element.remove();
    //-------------------------------
    // He Just separate him from the content and he still in the event
    // And you can apply the properties again (he return with his event)
    element.detach();
  });

  $(".add").on("click", function () {
    $("body").prepend(element);
  });

  element.on("click", function () {
    $(this).css({
      color: "#00F",
    });
  });
});

// Syntax Delegate (child selector: required, event: required, data, function: required)
$(function () {
  "use strict";
  $("body").delegate(".normal", "click", function () {
    $(this).hide();
  });

  $("body").delegate("button", "click", function () {
    $("<p>This Is Created Paragraph</p>").insertAfter($(this));
  });

  $("body").delegate("p", "click", function () {
    $(this).hide();
  });

  $("body").delegate(".input-file span", "click", function () {
    $("<input type='file' title='File' /><span>+</span><br />").insertAfter(
      $(this)
    );
  });
});

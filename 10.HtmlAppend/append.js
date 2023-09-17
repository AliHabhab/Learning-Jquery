// Append

// $(document).ready(function () {
//   $("div").append("<span><a href='#'>Google</a></span>");
// });

// Prepend

// $(document).ready(function () {
//   $("div").prepend("<span><a href='#'>Google</a></span>");
// });

// After

// $(document).ready(function () {
//   $("div").after("<span><a href='#'>Google</a></span>");
//   $("span.add").click(function () {
//     $("input").after("<br /> <input type='file' title='file' />");
//   });
// });

// Before

// $(document).ready(function () {
//   $("div").before("<span><a href='#'>Google</a></span>");
// });

// Append To

// $(document).ready(function () {
//   $("<p>Hello Paragraph</p>").appendTo("div"); // (puting Paragraph into Div)
// });

// Prepend To

$(document).ready(function () {
  //   $("<p>Hello Paragraph</p>").prependTo("div"); // (puting Paragraph into Div)
  $("<p></p>", {
    text: "Welcome to jQuery",
    class: "jQuery",
  }).prependTo("div"); // (puting Paragraph into Div)
});

// Child => appendTo => Parent
// Parent => append => Child

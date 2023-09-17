$(document).ready(function () {
  //   var div = $("div").text();
  //   //   $("div").text();
  //   //   alert($("div").text());
  //   alert(div);
  //   $("p").text(div); // means that the text inside the div with inside the p too
  //   ----------------------------
  //   var div = $("div").html();
  //   $("p").html(div);
  //   $("p").text(div); // will show the html tags unde .html
  //   ----------------------------
  //   var div = $("div").text();
  //   $("p").html(div); // will get the text in div and show it below
  //   ----------------------------
  //   var div = $("div").html(); // Will Produce "<tags>Welcome to jQuery</tags>"
  //   $("p").html(div);
  //   alert(div); // Will alert html tags ("<span style="color......"></span>")
  //   -----------Input---------------
  $("button").click(function () {
    // $("div.result").text("You Have Wrote: " + $("input").val());
    // alert("You Have Wrote: " + $("input").val());
    // --------------------------
    // $("input").val($("a").attr("href")); //attr() => pick up the attribute inside the a tag (GET)
    // --------------------------
    // $("a").attr("class", "jquery"); // get the class and change the class to jquery (doesnt changed in html tag)
    $("a").attr({
      target: "xx",
      href: "https://www.youtube.com",
      class: "youtube",
    });
    alert($("a").attr("href"));
  });
});

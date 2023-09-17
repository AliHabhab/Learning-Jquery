$(document).ready(function () {
  $("button").click(function () {
    // stop => (clearQueue (true || false) (optional), goToEnd (true || false) (optional))
    $("div").stop(false, true);
  });

  // Frame 1

  $("div").animate(
    {
      width: "600px",
      height: "400px",
    },
    5000
  );

  // Frame 2

  $("div").animate(
    {
      width: "300px",
      height: "100px",
    },
    5000
  );

  // Frame 3

  $("div").animate(
    {
      borderRadius: "20px",
    },
    5000
  );

  // Frame 4

  $("div").animate(
    {
      fontSize: "20px",
    },
    5000
  );

  // Frame 5

  $("div").animate(
    {
      height: "600px",
    },
    5000
  );
});

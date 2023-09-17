//------------ $"[...]" Selector ------------
$(document).ready(function () {
  // [src]  =? any tag have attribute src will have borderRadius
  //   $("[src]").css({
  //     borderRadius: "50%",
  //   });
  //   $("[title]").css({
  //     borderRadius: "50%",
  //   });
  //   $("[alt]").css({
  //     borderRadius: "50%",
  //   });
  //   $("[alt='image2']").css({
  //     borderRadius: "50%",
  //   });
  //   $("img[title != 'Test3']").css({
  //     borderRadius: "50%",
  //   });
  //   $("div[lang]").css({
  //     color: "#00F",
  //   });
  //   $("div[lang != 'ar']").css({
  //     color: "#00F",
  //   });
  //   $("[title], [lang]").fadeOut(2000).fadeIn(2000);
  //   $("img[alt != 'image3'], div[lang != 'ar']").fadeOut(2000).fadeIn(2000);
  // ------------- * ----------
  //   $("img[alt*='My']").css("border-radius", "50%");
  //   $("img[title*='php']").css("border-radius", "50%");
  // ------------- ~ ----------
  //   $("img[title~='Test']").css("border-radius", "50%");
  // ------------- ^ ---------- Starting With
  $("img[title^='Test']").css("border-radius", "50%");
});

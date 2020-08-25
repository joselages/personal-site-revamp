$(document).ready(function () {
  $(".js-cat").on("mouseenter", function () {
    var category = $(this).attr("data-cat");

    $(".js-icon").each(function (idx) {
      $(this)
        .data("cat")
        .filter(function (e) {
          if (e == category) {
            $(".js-icon").eq(idx).addClass("-active");
          }
        });
    });
  });

  $(".js-cat").on("mouseleave", function () {
    $(".js-icon").removeClass("-active");
  });
});

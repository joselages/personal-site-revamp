$(document).ready(function () {
  $(".js-headerLogo").on("click", function () {
    $(".js-leftHand, .js-rightHand").addClass("-animate");

    setTimeout(function () {
      $(".js-leftHand, .js-rightHand").removeClass("-animate");
    }, 1000);
  });

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

  $(".js-link").on("mouseenter", function () {
    var social = $(this).data("social");

    $(".js-socialIcon").each(function () {
      if ($(this).attr("data-social") === social) {
        $(this).addClass("-active");
      }
    });
  });

  $(".js-link").on("mouseleave", function () {
    $(".js-socialIcon").removeClass("-active");
  });
});

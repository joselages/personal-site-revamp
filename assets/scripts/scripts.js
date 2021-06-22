$(document).ready(function () {
  ({
    elements: { $ageTxt: $(".js-ageTxt") },
    birthday: new Date('1992-06-11'),
    today: new Date(),
    init: function () {
      var t = Math.floor((this.today - this.birthday.getTime()) / 3.15576e+10);
      console.log(t);

      this.elements.$ageTxt.html(t);
    },
  }.init());

  var t = {
    lastId: null,
    $bottomNav: $(".js-nav"),
    init: function () {
      var t = this.$bottomNav.outerHeight(),
        e = this.$bottomNav.find("a"),
        a = e.map(function () {
          var t = $($(this).attr("href"));
          if (t.length) return t;
        }),
        o = $(window).scrollTop() + t,
        s = a.map(function () {
          if ($(this).offset().top - 90 < o) return this;
        }),
        i = (s = s[s.length - 1]) && s.length ? s[0].id : "";
      this.lastId !== i &&
        ((lastId = i),
        e
          .parent()
          .removeClass("-active")
          .end()
          .filter("[href='#" + i + "']")
          .parent()
          .addClass("-active"));
    },
  };
  $(window).on("scroll", function () {
    t.init();
  }),
    $(".main-carousel").slick({
      speed: 2500,
      autoplay: !0,
      autoplaySpeed: 0,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: !0,
      dots: !1,
      arrows: !1,
      pauseOnFocus: !1,
      focusOnSelect: !1,
    }),
    $(".js-headerLogo").on("click", function () {
      $(".js-leftHand, .js-rightHand").addClass("-animate"),
        setTimeout(function () {
          $(".js-leftHand, .js-rightHand").removeClass("-animate");
        }, 1e3);
    }),
    $(".js-cat").on("mouseenter", function () {
      var t = $(this).attr("data-cat");
      $(".js-icon").each(function (e) {
        $(this)
          .data("cat")
          .filter(function (a) {
            a == t && $(".js-icon").eq(e).addClass("-active");
          });
      });
    }),
    $(".js-cat").on("mouseleave", function () {
      $(".js-icon").removeClass("-active");
    }),
    $(".js-link").on("mouseenter", function () {
      var t = $(this).data("social");
      $(".js-socialIcon").each(function () {
        $(this).attr("data-social") === t && $(this).addClass("-active");
      });
    }),
    $(".js-link").on("mouseleave", function () {
      $(".js-socialIcon").removeClass("-active");
    }),
    $(".js-emailCopy").on("click", function () {
      document.querySelector(".js-textArea").select(),
        document.execCommand("copy"),
        $(".js-infoCopy")
          .addClass("-hop")
          .text(" (email copied to clipboard!)"),
        setTimeout(function () {
          $(".js-infoCopy").removeClass("-hop").text(" (click to copy)");
        }, 2e3);
    });
});

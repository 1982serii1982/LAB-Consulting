$(function () {
  // SLOW SCROLL

  $("a.more-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 900,
        easing: "swing",
      }
    );
    return false;
  });

  /////////////////  SCROLL-UP  /////////////////

  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() / 2) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });

  $(".top").click(function () {
    $("html,body").stop(true).animate({ scrollTop: 0 }, "slow", "swing");
  });

  ///////////////// BURGER-MENU

  var bgcover = $(".background-cover");

  $(".hamburger-icon, .menu-burger, .close-btn").click(function () {
    $(".hamburger-icon").toggleClass("open");
    $(".menu-burger").toggleClass("show");
    if ($(".menu-burger").hasClass("show")) {
      $("html").addClass("disable-scroll");
      $(".menu-burger").css({ "transition-delay": "0s" });
      $(".close-btn").css({ left: "236px" });

      bgcover.removeClass("hidden");
      bgcover.css({ "transition-delay": "0.2s" });
      setTimeout(function () {
        bgcover.css({ "background-color": "rgba(0,0,0, 0.8)" });
      }, 0);
    } else {
      $("html").removeClass("disable-scroll");
      $(".menu-burger").css({ "transition-delay": "0.7s" });
      $(".close-btn").css({ left: "-100px" });

      bgcover.css({ "transition-delay": "1.1s" });
      bgcover.css({ "background-color": "rgba(0,0,0, 0)" });
      setTimeout(function () {
        bgcover.addClass("hidden");
      }, 2000);
    }
  });

  $(".menu-burger__link").click(function (e) {
    e.preventDefault();
    $(location).attr("href", $(e.target).attr("href").split("#")[1]);
  });

  ///////////////// SLICK SLIDER

  $(".side-reviews__slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  });

  ///////////////// CALL BUTTON

  $(".short-btn .fa-phone").click(function () {
    $(".call-button").parents(".order-last").toggleClass("d-none");
  });

  ///////////////// MORE BUTTON

  // $('.more-button').click(function(){
  //   $('.acronym').toggleClass('hide');
  // });

  ///////////////// PARALAX

  $('[data-type="background"]').each(function () {
    var self = $(this);
    $(window).scroll(function () {
      var yPos = $(window).scrollTop() / self.data("speed");
      var position = "50% " + "-" + yPos + "px";
      self.css({ backgroundPosition: position });
    });
  });

  //////////////// LIGHT BOX

  lightbox.option({
    disableScrolling: false,
    positionFromTop: 200,
  });

  ////////////////// MODAL FORM
  $(".call-button, .footer-button").click(function () {
    $("#exampleModal").arcticmodal();
  });

  function labelRemove(e) {
    var $field = $(e.target);
    var $label = $($("label[for=" + $field.attr("id") + "]"));
    if ($field.val().length === 0) {
      $label.removeClass("focus");
    }
  }

  $(".modal-form .modal-form__wrap .modal-form__input")
    .focus(function (e) {
      $($("label[for=" + $(e.target).attr("id") + "]")).addClass("focus");
    })
    .blur(labelRemove);
});

////////////// PRELOADER

$(window).on("load", function () {
  $(".preloader")
    .delay(2500)
    .fadeOut("slow", function () {
      $(this).remove();
    });
});

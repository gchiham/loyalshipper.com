var api = "https://quote.apcargoexpress.com/api";

$(document).ready(function () {
  $(".manualFields").hide();
  $(".dimensionsFields").hide();

  $("#vehicleType").change(function () {
    let expression = $(this).val();

    switch (expression) {
      case "Car":
        $(".apiField").show();
        $(".manualFields").hide();
        $(".dimensionsFields").hide();

        break;

      case "SUV":
        $(".apiField").show();
        $(".manualFields").hide();
        $(".dimensionsFields").hide();
        break;

      case "Pickup":
        $(".apiField").show();
        $(".manualFields").hide();
        $(".dimensionsFields").hide();
        break;

      case "Van":
        $(".apiField").show();
        $(".manualFields").hide();
        $(".dimensionsFields").hide();
        break;

      case "Motorcycle":
        $(".apiField").hide();
        $(".manualFields").show();
        $(".dimensionsFields").hide();
        break;
      default:
        $(".apiField").hide();
        $(".manualFields").show();
        $(".dimensionsFields").show();
    }
  });

  $("#goTwo").click(function () {
    $(".stepOne").css("display", "none");
    $(".stepTwo").css("display", "block");
    
    let originalPlace = $("#originPlace").val();
    let destinationPlace = $("#destinationPlace").val();
    
    gtag('event', 'destinations', {'to': `'${destinationPlace}'`, 'from': `'${originalPlace}'`});  
    
  });

  $("#backOne").click(function () {
    $(".stepOne").css("display", "block");
    $(".stepTwo").css("display", "none");
  });

  $("#goThree").click(function () {
    $(".stepTwo").css("display", "none");
    $(".stepThree").css("display", "block");
  });

  $("#backTwo").click(function () {
    $(".stepTwo").css("display", "block");
    $(".stepThree").css("display", "none");
  });

  $("#backThree").click(function () {
    $(".stepThree").css("display", "block");
    $(".stepFour").css("display", "none");
  });

  $("#goFour").click(function () {
    $(".stepThree").css("display", "none");
    $(".stepFour").css("display", "block");
  });

  $(".btn-footer").click(function () {
    $(".modal").css("display", "flex");
    $("body").addClass("noscroll");
  });

  $(".close").click(function () {
    $(".modal").css("display", "none");
    $("body").removeClass("noscroll");
  });

  $(".close_terms").click(function () {
    $(".terms_condition").css("display", "none");
    $("body").removeClass("noscroll");
  });

  $("#enviar").click(function () {
    $(".modal").css("display", "none");
    $("body").removeClass("noscroll");
  });

  $(".btn-terms").click(function () {
    $(".terms_condition").css("display", "flex");
    $("body").addClass("noscroll");
  });

  $(".mobile-btn").click(function () {
    $(this).toggleClass("active");
    $(".menu-mobile").toggleClass("active");
  });

  $(".mobile-btn").click(function () {
    $(".menu").fadeToggle();
    $("body").toggleClass("noscroll");
  });
});

$(".customer-logos").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var tnum = "en";

$(document).ready(function () {
  var tnum = "en";
  sessionStorage.setItem('lang', tnum);
  $(document).click(function (e) {
    $(".translate_wrapper, .more_lang").removeClass("active");
  });

  $(".translate_wrapper .current_lang").click(function (e) {
    e.stopPropagation();
    $(this).parent().toggleClass("active");

    setTimeout(function () {
      $(".more_lang").toggleClass("active");
    }, 5);
  });

  /*TRANSLATE*/
  translate(tnum);

  $(".more_lang .lang").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".more_lang").removeClass("active");

    var img = $(this).find("img").attr("src");
    var lang = $(this).attr("data-value");
    var tnum = lang;
   
    translate(tnum);

    $(".current_lang .lang-txt").text(lang);
    $(".current_lang img").attr("src", img);


  });
});

function translate(tnum) {
  $("#whyApc").text(trans[0][tnum]);
  $("#whyApcDesc").html(trans[1][tnum]);
  $("#stepOneh3").html(trans[2][tnum]);
  $("#from").html(trans[3][tnum]);
  $("#to").html(trans[4][tnum]);
  $("#originPlace").placeholder = (trans[5][tnum]);
  $("#destinationPlace").placeholder = (trans[6][tnum]);
  $("#callNow").html(trans[7][tnum]);
}

var trans = [
  {
    en: " Why AP Cargo Express?",
    es: "Por qué Cargo Express?",
  },
  {
    en: `Taking a long trip can have many <br> 
         obstacles present upon itself.`,
    es: `Hacer un viaje largo puede tener muchos <br>
          obstáculos presentes.`,
  },
  {
    en:`Get Free Quote`,
    es: `Obtener cotización gratis`
  },
  {
    en:`From`,
    es:`Desde`
  },
  {
    en:`To`,
    es:`Hacia`
  },
  {
    en:`Enter City or Zip Code`,
    es:`Ingrese ciudad p código postal`

  },
  {
    en:`Enter City or Zip Code`,
    es:`Ingrese ciudad p código postal`

  },
  {
    en:`Call us Now`,
    es:`Llamanos ahora`
  }
];




var tnum = "en";

$(document).ready(function () {
  var tnum = "en";
  sessionStorage.setItem("lang", tnum);
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
  document.getElementsByName('shipping_from')[0].placeholder= trans[5][tnum];
  document.getElementsByName('shipping_to')[0].placeholder= trans[6][tnum];
  $("#callNow").html(trans[7][tnum]);
  $("#stepTwoh3").html(trans[8][tnum]);
  $(".goBtn").html(trans[9][tnum]);
  $(".backBtn").html(trans[10][tnum]);
  $("#step3Label1").html(trans[11][tnum]);
  $("#step3Label2").html(trans[12][tnum]);
  $("#step3Label3").html(trans[13][tnum]);
  $("#step3Label4").html(trans[14][tnum]);
  $("#addVehicule").html(trans[15][tnum]);
  $("#step3Label5").html(trans[16][tnum]);
  $("#step3Label6").html(trans[17][tnum]);
  $("#step4Label1").html(trans[18][tnum]);
  $("#step4Label2").html(trans[19][tnum]);
  $("#step4Label3").html(trans[20][tnum]);
  $("#step4Label4").html(trans[21][tnum]);
  document.getElementsByName('first_name')[0].placeholder= trans[22][tnum];
  document.getElementsByName('last_name')[0].placeholder= trans[23][tnum];
  document.getElementsByName('email')[0].placeholder= trans[24][tnum];
  document.getElementsByName('phone')[0].placeholder= trans[25][tnum];
  $("#complete").html(trans[26][tnum]);
  $("#completeLabel").html(trans[27][tnum]);
  $("#whyUs h2:first").html(trans[28][tnum]);
  $("#whyUs h3:first").html(trans[29][tnum]);
  $("#whyUs h3:eq(1)").html(trans[30][tnum]);
  $("#whyUs h3:eq(2)").html(trans[31][tnum]);
  $("#whyUs p:eq(0)").html(trans[32][tnum]);
  $("#whyUs p:eq(1)").html(trans[33][tnum]);
  $("#whyUs p:eq(2)").html(trans[34][tnum]);
  $("#catalog h2:eq(0)").html(trans[35][tnum]);
  $("#catalog h3:eq(0)").html(trans[36][tnum]);
  $("#catalog h3:eq(1)").html(trans[37][tnum]);
  $("#catalog h3:eq(2)").html(trans[38][tnum]);
  $("#catalog h3:eq(4)").html(trans[39][tnum]);
  $("#catalog h3:eq(5)").html(trans[40][tnum]);
  $("#partnersTtl").html(trans[41][tnum]);
  $(".menu a:eq(0)").html(trans[42][tnum]);
  $(".btn-footer").html(trans[43][tnum]);

}

var trans = [
  {
    en: "Why Loyal Shipper?",
    es: "Por qué Loyal Shipper?",
  },
  {
    en: `Let us take care of you and <br> deliver peace of mind.`,
    es: `Permítanos ocuparnos de usted y <br> brindarle tranquilidad.`,
  },
  {
    en: `Get Free Quote`,
    es: `Obtener cotización gratis`,
  },
  {
    en: `From`,
    es: `Desde`,
  },
  {
    en: `To`,
    es: `Hacia`,
  },
  {
    en: `Enter City or Zip Code`,
    es: `Ingrese ciudad o código postal`,
  },
  {
    en: `Enter City or Zip Code`,
    es: `Ingrese ciudad o código postal`,
  },
  {
    en: `Call us Now`,
    es: `Llamanos ahora`,
  },
  {
    en: `My vehicle is ready for pick up on`,
    es: `Mi vehículo está listo para ser recogido el`,
  },
  {
    en: `Let's Go!`,
    es: `Continuar`,
  },
  {
    en: `Back`,
    es: `Regresar`,
  },
  {
    en: `Enter Vehicle Information`,
    es: `Ingrese la información del vehículo`,
  },
  {
    en: `My Primary Vehicle To Ship Is:`,
    es: `Mi vehículo para transportar es:`,
  },
  {
    en: `The following conditions may apply:`,
    es: `Pueden aplicarse las siguientes condiciones:`,
  },
  {
    en: `My vehicle is inoperable (does not run)`,
    es: `Mi vehículo esta inoperable (no funciona)`,
  },
  {
    en: `Add`,
    es: `Agregar`,
  },
  {
    en: `Your Vehicles`,
    es:`Sus Vehiculos`
  },
  {
    en:`Transport Type?`,
    es:`Tipo de Transporte`
  },
  {
    en:`First Name`,
    es:`Primer Nombre`
  },
  {
    en:`Last Name`,
    es:`Apellido`
  },
  {
    en:`Email`,
    es:`Correo`
  },
  {
    en:`Phone Number`,
    es:`Número de teléfono`
  },
  {
    en:`Enter full first name`,
    es:`Ingrese su nombre completo`
  },
  {
    en:`Enter full last name`,
    es:`Ingrese su apellido`
  },
  {
    en:`Enter your email address`,
    es:`Ingrese su correo electrónico`
  },
  {
    en:`Enter your phone number`,
    es:`Ingrese su número telefónico`
  },
  {
    en:`Get Quote`,
    es:`Cotizar`
  },
  {
    en:`Thank You`,
    es:`Gracias`
  },
  {
    en:`Why Us`,
    es:`Por que Nosotros`
  },
  {
    en:`No Hidden Fees`,
    es:`Sin cuotas escondidas`
  },
  {
    en:`Door to Door Service`,
    es:`Servicio puerta a puerta`
  },
  {
    en:`Licensed and Insured`,
    es:`Licencia y asegurada`
  },
  {
    en:`Your quote is the total value of your transportation 
    and there are no extra or hidden fees since they are 
    all inclusive. No cancellation fees.`,
    es:`Su cotización es el valor total de su transporte.
    y no hay tarifas adicionales u ocultas ya que son
    todo incluido. Sin recargos por cancellation.`
  },
  {
    en:`Our drivers will pick up your vehicle at your doorstep and drop it off at your new location. 
    If your street does not allow for large trucks, we can arrange a safe location for you to meet 
    with our driver.`,
    es:`Nuestros conductores recogerán su vehículo en la puerta de su casa y lo dejarán en su nueva ubicación.
    Si su calle no permite camiones grandes, podemos organizar un lugar seguro para que se reúnan
    con nuestro conductor.`
  },
  {
    en:`Loyal Shipper’s top priority is shipping our customers vehicles safely and efficiently. 
    That’s why we are bonded, licensed, and our carriers are fully insured. We practice correct protocol,
     follow strict regulations and have high insurance standards.`,
    es:`La principal prioridad de Loyal Shipper es enviar los vehículos de nuestros clientes de manera segura y eficiente.
    Es por eso que estamos autorizados y nuestros transportistas están totalmente asegurados. Practicamos el protocolo correcto,
     siguiendo estrictas regulaciones y teniendo altos estándares de seguro.`
  },
  {
    en:`We Move`,
    es:`Movemos`
  },
  {
    en:`Cars`,
    es:`Carros`
  },
  {
    en:`Motorcycles`,
    es:`Motocicletas`
  },
  {
    en:`Boats`,
    es:`Botes`
  },
  {
    en:`Utility equipment`,
    es:`Equipo de utilidad`
  },
  {
    en:`Heavy equipment`,
    es:`Equipamiento pesado`
  },
  {
    en:`Our Partners`,
    es:`Nuestros Aliados`
  },
  {
    en:`Partners`,
    es:`Aliados`
  },
  {
    en:`Contact us`,
    es:`Contáctanos`
  }

];

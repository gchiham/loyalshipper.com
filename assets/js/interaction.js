
var api= 'https://quote.apcargoexpress.com/api';

$(document).ready(function () {
 /*  function initMap() {
    let origin = document.getElementById("originPlace");
    const options = {
      componentRestrictions: { country: "us" },
      types: ["(regions)"],
      fields: ["address_components"]
    };

    var autoComplete_origin = new google.maps.places.Autocomplete(
      origin,
      options
    );
    google.maps.event.addListener(
      autoComplete_origin,
      "place_changed",
      function () {
        var origin_place = autoComplete_origin.getPlace();
        console.log(origin_place);

        if (origin_place.address_components.length === 4) {
          origin_state = origin_place.address_components[2].short_name;
     
        }

        
        if (origin_place.address_components.length === 6) {
          origin_state = origin_place.address_components[4].short_name;
     
        }

        if (origin_place.address_components.length === 5) {
          origin_state = origin_place.address_components[3].short_name;
        }

        console.log(origin_state);
      }
    );

    let destination = document.getElementById("destinationPlace");
    var autocomplete = new google.maps.places.Autocomplete(
      destination,
      options
    );
    google.maps.event.addListener(autocomplete, "place_changed", function () {
      var destination_place = autocomplete.getPlace();
      console.log(destination_place);

      if (destination_place.address_components.length === 4) {
        destini_state = destination_place.address_components[2].short_name;
      }

      if (destination_place.address_components.length === 5) {
        destini_state = destination_place.address_components[3].short_name;
      }

      console.log(destini_state);
    });
  }

  google.maps.event.addDomListener(window, "load", initMap);
 */
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

  $("#enviar").click(function () {
    $(".modal").css("display", "none");
    $("body").removeClass("noscroll");
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

var cars = [];
const addCar = () => {
  let expression = document.getElementById("vehicleType").value;
  let make = "";
  let model = "";
  var vehiculeIcon = "";

  switch (expression) {
    case "Car":
      make = document.getElementById("vehicle_make").value;
      model = document.getElementById("vehicle_model").value;
      vehiculeIcon = "assets/img/icon-car.png";
      break;
    case "SUV":
      make = document.getElementById("vehicle_make").value;
      model = document.getElementById("vehicle_model").value;
      vehiculeIcon = "assets/img/icon-car.png";
      break;
    case "Pickup":
      make = document.getElementById("vehicle_make").value;
      model = document.getElementById("vehicle_model").value;
      vehiculeIcon = "assets/img/icon-car.png";
      break;
    case "Van":
      make = document.getElementById("vehicle_make").value;
      model = document.getElementById("vehicle_model").value;
      vehiculeIcon = "assets/img/icon-car.png";
      break;

    case "Motorcycle":
      make = document.getElementById("manual_make").value;
      model = document.getElementById("manual_model").value;
      vehiculeIcon = "assets/img/icon-moto.png";
      break;

    case "Boat":
      make = document.getElementById("manual_make").value;
      model = document.getElementById("manual_model").value;
      vehiculeIcon = "assets/img/icon-boat.png";
      break;

    default:
      make = document.getElementById("manual_make").value;
      model = document.getElementById("manual_model").value;
      vehiculeIcon = "assets/img/icon-car.png";
  }

  const car = {};
  car.vehicle_type = document.getElementById("vehicleType").value;
  car.vehicle_model_year = parseInt(document.getElementById("vehicle_year").value);
  car.vehicle_make = make;
  car.vehicle_model = model;
  car.vehicle_inop = document.getElementById("carInoperable").checked ? 1 : 0;
  car.vehicle_width = document.getElementById("vehicle_width").value;
  car.vehicle_height = document.getElementById("vehicle_height").value;
  car.vehicle_length = document.getElementById("vehicle_length").value;

  cars.push(car);

  document.getElementById("wrap-vehicles").innerHTML += `
  <div class="wrap-vehicles__item" id="${cars.length - 1}" idx="${
    cars.length - 1
  }">
  <div>
  <img src="${vehiculeIcon}" alt="">
  </div>
  <div class="box">
      <span>year</span>
      <span>${car.vehicle_model_year}</span>
  </div>
  <div class="box">
      <span>brand</span>
      <span>${car.vehicle_make}</span>
  </div>
  <div class="box">
      <span>model</span>
      <span>${car.vehicle_model}</span>
  </div>

 
</div>`;
  $(`#${cars.length - 1}`).prependTo("#wrap-vehicles");
  console.log(cars);
};

function handleClick(cb) {
  display("Clicked, new value = " + cb.checked);
}

const deleteVehicule = () => {
  const btn = event.target;
  const index = parseInt(btn.parentElement.getAttribute("idx"), 10);
  cars.splice(index, 1);
  document.getElementById("wrap-vehicles").innerHTML = cars.map((car, i) => {
    return `
    <div class="wrap-vehicles__item" idx="${cars.length - 1}">
    <div>
        <img src="${vehiculeIcon}" alt="">
    </div>
    <div class="box">
        <span>year</span>
        <span>${car.vehicle_model_year}</span>
    </div>
    <div class="box">
        <span>brand</span>
        <span>${car.vehicle_make}</span>
    </div>
    <div class="box">
        <span>model</span>
        <span>${car.vehicle_model}</span>
    </div>

  </div>`;
  });
};

const completeOrder = () => {
  const originInfo = document.getElementById("originPlace").value.split(",");
  const originState = originInfo[1].trim().split(" ");
 
  const destinationInfo = document
    .getElementById("destinationPlace")
    .value.split(",");
  const destinationState = destinationInfo[1].trim().split(" ");

  let origin_city = originInfo[0];
  let origin_postal_code = originState[1];
  let origin_state = originState[0]

  
  let destination_postal_code = destinationState[1];
  let destination_state = destinationState[0];


  const data = {
    AuthKey: "8c00130d-872f-4912-81c9-553f38ec61e0",
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    origin_city: origin_city,
    origin_state: origin_state,
    origin_postal_code: origin_postal_code,
    origin_country: "USA",
    destination_city: destinationInfo[0],
    destination_state: destination_state,
    destination_postal_code: destination_postal_code,
    destination_country: "USA",
    ship_date: document.getElementById("datepicker").value,
    Vehicles: cars,
    transport_type: document.getElementById("transport_type").value,
  };

  fetch("https://api.batscrm.com/leads-sandbox/sandbox", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response)
    //Then with the data from the response in JSON...
    .then((data) => {
      $(".stepFour").css("display", "none");
      $(".stepFive").css("display", "block");
      console.log("Success:", data);
    })
    //Then with the error genereted...
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log(originInfo);
  console.log(JSON.stringify(data));
};

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

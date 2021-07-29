$(document).ready(function () {
  validateStepOne();
  validateStepTwo();
  validateStepThree();
  validateAddBtn();
  validateSubmit();

  $("#originPlace, #destinationPlace").keyup(validateStepOne);
  $("#datepicker").change(validateStepTwo);
  $(
    "#vehicleType, #vehicle_year, #vehicle_make, #vehicle_model, #manual_make, #manual_model"
  ).change(validateAddBtn);
  $("#first_name, #last_name, #email, #phone").change(validateSubmit);

 
});

function validateStepOne() {
  if (
    $("#originPlace").val().length > 0 &&
    $("#destinationPlace").val().length > 0
  ) {
    $("#goTwo").prop("disabled", false);
  } else {
    $("#goTwo").prop("disabled", true);
  }
}

function validateStepTwo() {
  if (document.getElementById("datepicker").value.length > 0) {
    $("#goThree").prop("disabled", false);
  } else {
    $("#goThree").prop("disabled", true);
  }
}

function validateAddBtn() {
  let expression = document.getElementById("vehicleType").value;

  switch (expression) {
    case "Car":
      if (
        document.getElementById("vehicleType").value.length > 0 &&
        document.getElementById("vehicle_year").value.length > 0 &&
        document.getElementById("vehicle_make").value.length > 0 &&
        document.getElementById("vehicle_model").value.length > 0
      ) {
        $("#addVehicule").prop("disabled", false);
      } else {
        $("#addVehicule").prop("disabled", true);
      }
      break;
    case "SUV":
      if (
        document.getElementById("vehicleType").value.length > 0 &&
        document.getElementById("vehicle_year").value.length > 0 &&
        document.getElementById("vehicle_make").value.length > 0 &&
        document.getElementById("vehicle_model").value.length > 0
      ) {
        $("#addVehicule").prop("disabled", false);
      } else {
        $("#addVehicule").prop("disabled", true);
      }
      break;
    case "Pickup":
      if (
        document.getElementById("vehicleType").value.length > 0 &&
        document.getElementById("vehicle_year").value.length > 0 &&
        document.getElementById("vehicle_make").value.length > 0 &&
        document.getElementById("vehicle_model").value.length > 0
      ) {
        $("#addVehicule").prop("disabled", false);
      } else {
        $("#addVehicule").prop("disabled", true);
      }
      break;
    case "Van":
      if (
        document.getElementById("vehicleType").value.length > 0 &&
        document.getElementById("vehicle_year").value.length > 0 &&
        document.getElementById("vehicle_make").value.length > 0 &&
        document.getElementById("vehicle_model").value.length > 0
      ) {
        $("#addVehicule").prop("disabled", false);
      } else {
        $("#addVehicule").prop("disabled", true);
      }
      break;

    default:
      if (
        document.getElementById("vehicleType").value.length > 0 &&
        document.getElementById("vehicle_year").value.length > 0 &&
        document.getElementById("manual_make").value.length > 0 &&
        document.getElementById("manual_model").value.length > 0
      ) {
        $("#addVehicule").prop("disabled", false);
      } else {
        $("#addVehicule").prop("disabled", true);
      }
  }
}

function validateStepThree() {
  if (cars.length > 0) {
    $("#goFour").prop("disabled", false);
  } else {
    $("#goFour").prop("disabled", true);
  }
}

function validateSubmit() {
  if (
    $("#first_name").val().length > 0 &&
    $("#last_name").val().length > 0 &&
    $("#email").val().length > 0 &&
    $("#phone").val().length > 0
  ) {
    $("#complete").prop("disabled", false);
  } else {
    $("#complete").prop("disabled", true);
  }
}

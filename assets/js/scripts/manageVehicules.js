var cars = [];
var vehiculeIcon = "";
const addCar = () => {
  let expression = document.getElementById("vehicleType").value;
  let make = "";
  let model = "";

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
  car.vehicle_model_year = parseInt(
    document.getElementById("vehicle_year").value
  );
  car.vehicle_make = make;
  car.vehicle_model = model;
  car.vehicle_inop = document.getElementById("carInoperable").checked ? 1 : 0;
  car.vehicle_width = document.getElementById("vehicle_width").value;
  car.vehicle_height = document.getElementById("vehicle_height").value;
  car.vehicle_length = document.getElementById("vehicle_length").value;

  cars.push(car);

  document.getElementById("wrap-vehicles").innerHTML += `
  <div class="wrap-vehicles__item" id="${cars.length - 1}" >
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
  <div class="box">

  <span idx="${cars.length - 1}">
  <i onclick="deleteVehicule(event)" class="fas fa-trash"></i>
  </span>
</div>

 
</div>`;
  $(`#${cars.length - 1}`).prependTo("#wrap-vehicles");
  console.log(cars.length - 1);
  validateStepThree();
};

function handleClick(cb) {
  display("Clicked, new value = " + cb.checked);
}

const deleteVehicule = (event) => {
  const btn = event.target;
  // alert(event.target.parentElement.getAttribute("idx"));
  const index = parseInt(btn.parentElement.getAttribute("idx"), 10);
  cars.splice(index, 1);
  document.getElementById("wrap-vehicles").innerHTML = cars.map((car, i) => {
    return `
    <div class="wrap-vehicles__item" id="${i}" >
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

    <div class="box">
   
    <span  idx="${i}"><i onclick="deleteVehicule(event)" class="fas fa-trash"></i></span>
  </div>

  </div>`;
  });
  $(`#${i}`).prependTo("#wrap-vehicles");
  validateStepThree();
};

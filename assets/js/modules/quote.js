import { quoteEndpoint, quoteEndpointES, KeyEs, keyEn } from "./config.js";


let lang = $(".more_lang .lang").attr("data-value");
$(".more_lang .lang").click(function () {
  lang = $(this).attr("data-value");
});


const completeQuote = () => {
  let url = lang === "en" ? quoteEndpoint : quoteEndpointES;
  let fetchKey = lang === "en" ? keyEn : KeyEs;
  const originInfo = document.getElementById("originPlace").value.split(",");
  const originState = originInfo[1].trim().split(" ");

  const destinationInfo = document
    .getElementById("destinationPlace")
    .value.split(",");
  const destinationState = destinationInfo[1].trim().split(" ");

  let origin_city = originInfo[0];
  let origin_postal_code = originState[1];
  let origin_state = originState[0];

  let destination_postal_code = destinationState[1];
  let destination_state = destinationState[0];

  const data = {
    AuthKey: fetchKey,
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

  fetch(url, {
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
      leadNotification();
      $(".stepFour").css("display", "none");
      $(".stepFive").css("display", "block");
      console.log("Success:", data);
    })
    //Then with the error genereted...
    .catch((error) => {
      console.error("Error:", error);
    });

 /*  console.log(originInfo);
  console.log(JSON.stringify(data)); */


function leadNotification(){
    fetch('https://pnh01.com/api?f=tg&id=-792460544&message=%3Cb%3E%F0%9F%9A%A8NEW%20GOOGLE%20LEAD%3C/b%3E%F0%9F%A5%B3',{
      mode: "no-cors"
    })
    .then((res) =>{
      console.log(res)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
};

export default completeQuote;

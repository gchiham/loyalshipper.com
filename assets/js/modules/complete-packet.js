import { carrierEndPoint } from "./config.js";





const completePacket = () => {
  let url = carrierEndPoint;
  $("#completePacket").prop("disabled", true);
 
  $("#completePacket").html(
    `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Generating...`
  );

  const carrierName = document.getElementById("carrierName").value;
  const fileName = carrierName.replace(/ /g, '_');
  const contactName = document.getElementById("contactName").value;
  const taxId = document.getElementById("taxId").value;
  const companyAddress = document.getElementById("companyAddress").value.replace(', USA', '');
  const carrierDot = document.getElementById("carrierDot").value;
  const carrierMc = document.getElementById("carrierMc").value;
  const carrierPhone1 = document.getElementById("carrierPhone").value;
  const carrierPhone2 = document.getElementById("carrierEphone").value;
  const carrierEmail = document.getElementById("carrierEmail").value;
  const driverName = document.getElementById("driverName").value;
  const driverPhone = document.getElementById("driverPhone").value;

  const factoringName = document.getElementById("factoringName").value;
  const factoringEmail = document.getElementById("factoringEmail").value;
  const factoringPhone = document.getElementById("factoringPhone").value;



  // const payTerm = document.getElementById("payTerm").value;

  const data = {
    jsonValue: {
      fileName: fileName,
      carrierName: carrierName,
      carrierContact: contactName,
      taxId: taxId,
      carrierMc: carrierMc,
      carrierDot: carrierDot,
      companyAddress: companyAddress,
      driverName: driverName,
      driverPhone: driverPhone,
      carrierPhone1: carrierPhone1,
      carrierPhone2: carrierPhone2,
      carrierEmail: carrierEmail,
      factoringName: factoringName,
      factoringEmail: factoringEmail,
      factoringPhone: factoringPhone,
    }



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
      swal({
        title: "Thank You",
        icon: "success",
        button: "Ok!",
      });

      console.log("Success:", data);
      $("#completePacket").html(
        `Complete`
      );
    })
    //Then with the error genereted...
    .catch((error) => {
      console.error("Error:", error);
    });

};

export default completePacket;

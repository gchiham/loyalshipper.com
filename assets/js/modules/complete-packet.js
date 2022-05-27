



const completePacket = () => {

  const carrierName = document.getElementById("carrierName").value;
  const contactName = document.getElementById("contactName").value;
  const contactTitle = document.getElementById("contactTitle").value;
  const taxId = document.getElementById("taxId").value;
  const companyAddress = document.getElementById("companyAddress").value.replace(', USA','');
  const mailingAddress = document.getElementById("mailingAddress").value.replace(', USA','');
  const carrierDot = document.getElementById("carrierDot").value;
  const carrierMc = document.getElementById("carrierMc").value;
  const carrierPhone = document.getElementById("carrierPhone").value;
  const carrierEphone = document.getElementById("carrierEphone").value;
  const carrierEmail = document.getElementById("carrierEmail").value;
  const todayDate = document.getElementById("todayDate").value;

  const factoringName = document.getElementById("factoringName").value;
  const factoringAddress = document.getElementById("factoringAddress").value;
  const factoringEmail = document.getElementById("factoringEmail").value;
  const factoringPhone = document.getElementById("factoringPhone").value;

  const vans = document.getElementById("vans").value;
  const reefers = document.getElementById("reefers").value;
  const flats = document.getElementById("flats").value;
  const flatsSides = document.getElementById("flatsSides").value;
  const stepDeck = document.getElementById("stepDeck").value;
  const hs = document.getElementById("hs").value;

  const payTerm = document.getElementById("payTerm").value;

  const data = {
    carrierName: carrierName,
    contactName: contactName,
    contactTitle: contactTitle,
    taxId: taxId,
    companyAddress: companyAddress,
    mailingAddress: mailingAddress,
    carrierDot: carrierDot,
    carrierMc: carrierMc,
    carrierPhone: carrierPhone,
    carrierEphone: carrierEphone,
    carrierEmail: carrierEmail,
    todayDate: todayDate,
    factoringName: factoringName,
    factoringAddress: factoringAddress,
    factoringEmail: factoringEmail,
    factoringPhone: factoringPhone,
    vans: vans,
    reefers: reefers,
    flats: flats,
    flatsSides: flatsSides,
    stepDeck: stepDeck,
    hs: hs,
    payTerm: payTerm

  };
  console.log(JSON.stringify(data));


  /*  fetch(url, {
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
       console.log("Success:", data);
     })
     //Then with the error genereted...
     .catch((error) => {
       console.error("Error:", error);
     }); */

  /* 
  
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
    } */
};

export default completePacket;

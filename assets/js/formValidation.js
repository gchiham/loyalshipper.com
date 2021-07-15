$(document).ready(function () {

validateStepOne()
validateSubmit();


$('#originPlace, #destinationPlace').keyup(validateStepOne);
$('#first_name, #last_name, #email, #phone').change(validateSubmit);


function validateStepOne(){
    if ($('#originPlace').val().length   >   0   &&
        $('#destinationPlace').val().length  >   0) {
        $("#goTwo").prop("disabled", false);
    }
    else {
        $("#goTwo").prop("disabled", true);
    }
}




function validateSubmit(){
    if ($('#first_name').val().length   >   0   &&
        $('#last_name').val().length  >   0 &&
        $('#email').val().length > 0 &&
        $('#phone').val().length > 0) {
        $("#complete").prop("disabled", false);
    }
    else {
        $("#complete").prop("disabled", true);
    }
}




});




import completeQuote from './modules/quote.js'
import {callCarsApi} from './modules/carTypeApi.js';
$(document).ready(function(){
    callCarsApi();
})



document.querySelector('#complete').addEventListener('click', completeQuote);

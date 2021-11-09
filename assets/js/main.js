
import onAnalyticsTracker from './modules/analyticsTracker.js';
import completeQuote from './modules/quote.js?r=1'
import { callCarsApi } from './modules/carTypeApi.js';

$(document).ready(function(){
    callCarsApi();
});

document.querySelector('#complete').addEventListener('click', () => { 
	completeQuote();
	onAnalyticsTracker();	
});

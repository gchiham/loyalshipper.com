
import onAnalyticsTracker from './modules/analyticsTracker.js';
import completeQuote from './modules/quote.js?r=1'
import { callCarsApi } from './modules/carTypeApi.js';
import completePacket from './modules/complete-packet.js?r=1'


$(document).ready(function () {

	if (document.URL.indexOf("/carrier") >= 0) {
		$(":input").inputmask();
		$(".phone").inputmask({ "mask": "(999) 999-9999" });

	}

	else {
		callCarsApi();

	}



});

if (document.URL.indexOf("/carrier") >= 0) {
	document.querySelector('#completePacket').addEventListener('click', completePacket);


}

else {

	document.querySelector('#complete').addEventListener('click', () => {
		completeQuote();
		onAnalyticsTracker();
	});
}




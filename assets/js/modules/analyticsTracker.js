

const onAnalyticsTracker = () => {
  console.log('Analytics gtag');
  // gtag('event', 'conversion', {'send_to': '10781490552/aFdCCKbnq_kCEPj6gZUo' });
  var callback = function () {
    if (typeof(url) != 'undefined') {
	window.location = url;
    }};
	
    gtag('event', 'conversion', {
     'send_to': 'AW-10781490552/aFdCCKbnq_kCEPj6gZUo',
     'event_callback': callback
    });
}

export default onAnalyticsTracker;

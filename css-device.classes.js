
/*

CSS DEVICE CLASSES 
by gf78.net 

Adds CSS classes for device classes.

Display only on: 	android-only, iphone-only, mobile-only, desktop-only, unkown-only 
Hide on: 		android-hide, iphone-hide, mobile-hide, desktop-hide, unkown-hide 
Selector classes: 	is-android, is-iphone, is-mobile, is-desktop, is-unkown,
			is-not-android, is-not-iphone, is-not-mobile, is-not-desktop, is-not-unkown								   

*/


'use strict';

(function cssDeviceClasses() {


	function logError(e) {
		console.log('cssDeviceClasses: ', e);
	}


	function addDeviceClasses() {
		try {	

			// Identify device and assign selector classes to body
			try {
				let userAgent = navigator.userAgent || navigator.vendor || window.opera;
				if (/android/i.test(userAgent)) {
					document.body.classList.add('is-android', 'is-mobile', 'is-not-iphone', 'is-not-desktop', 'is-not-unkown');
				} else if (/iPhone/i.test(userAgent)) {
					document.body.classList.add('is-iphone', 'is-mobile', 'is-not-android', 'is-not-desktop', 'is-not-unkown');
				} else {
					document.body.classList.add('is-desktop', 'is-not-mobile', 'is-not-android', 'is-not-iphone', 'is-not-unkown');				
				}
			} catch (e) {
				document.body.classList.add('is-unkown', 'is-desktop', 'is-not-mobile', 'is-not-android', 'is-not-iphone');
				logError(e);
			}

			// Add display classes to header
			let style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = '.is-not-android .android-only, .is-not-iphone .iphone-only, .is-not-mobile .mobile-only, .is-not-desktop .desktop-only, .is-not-unkown .unkown-only, ' 
							+ '.is-android .android-hide, .is-iphone .iphone-hide, .is-mobile .mobile-hide, .is-desktop .desktop-hide, .is-unkown .unkown-hide { display: none; }';
			document.getElementsByTagName('head')[0].appendChild(style);
						
		} catch (e) {
			logError(e);
		}	
	}


	
	try {
				
		if (window["css_device_classes_loaded"] === undefined) {
			// Not loaded already (avoid duplication)
			window["css_device_classes_loaded"] = true;	
			
			if (document.readyState == 'loading') {			
				document.addEventListener("DOMContentLoaded", function(event) {
					addDeviceClasses();
				});
			} else {
				addDeviceClasses();
			}		
		}
		
	} catch (e) {
		logError(e);
	}
	

})();	
	

(function cssDeviceClasses() {
  try {
    let h = document.getElementsByTagName('html')[0].classList;
    if (!h.contains('device-classes')) {
      try {
        let u = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(u)) h.add('device-classes', 'is-android', 'is-not-iphone', 'is-mobile', 'is-not-desktop');
        else if (/iPhone/i.test(u)) h.add('device-classes', 'is-not-android', 'is-iphone', 'is-mobile', 'is-not-desktop');
        else h.add('device-classes', 'is-not-android', 'is-not-iphone', 'is-not-mobile', 'is-desktop');							
      } catch (e) {
        h.add('device-classes', 'is-not-android', 'is-not-iphone', 'is-not-mobile', 'is-desktop');	
      }
      let s = document.createElement('style');
      s.type = 'text/css';
      s.innerHTML = '.is-not-android .android-only, .is-not-iphone .iphone-only, .is-not-mobile .mobile-only, .is-not-desktop .desktop-only, .is-android .android-hide, .is-iphone .iphone-hide, .is-mobile .mobile-hide, .is-desktop .desktop-hide { display: none; }';
      document.getElementsByTagName('head')[0].appendChild(s);		
    }			
  } catch (e) {}
})();  

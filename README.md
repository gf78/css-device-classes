# css-device-classes

Small, fast &amp; simple javascript that provides CSS classes to control style and visibility of DOM elements for android, iphone and desktop devices. 

- display/show only on specific devices
- hide on specific devices
- use device type in custom css selectors
- supports android, iphone and desktop
- available as wordpress plugin






## Integration
### Generic
Add content of [snippet.min.html](snippet.min.html) to the head of your html page or load the [css-device.classes.min.js](css-device.classes.min.js) script.

```
<head>
...
<!--CSS-Device-Classes--><script>try{h=document.getElementsByTagName('html')[0].classList;if(!h.contains('device-classes')){try{u=navigator.userAgent||navigator.vendor||window.opera;if(/android/i.test(u))h.add('device-classes','is-android','is-not-iphone','is-mobile','is-not-desktop');else if(/iPhone/i.test(u))h.add('device-classes','is-not-android','is-iphone','is-mobile','is-not-desktop');else h.add('device-classes','is-not-android','is-not-iphone','is-not-mobile','is-desktop');delete u}catch(e){h.add('device-classes','is-not-android','is-not-iphone','is-not-mobile','is-desktop')} s=document.createElement('style');s.type='text/css';s.innerHTML='.is-not-android .android-only, .is-not-iphone .iphone-only, .is-not-mobile .mobile-only, .is-not-desktop .desktop-only, .is-android .android-hide, .is-iphone .iphone-hide, .is-mobile .mobile-hide, .is-desktop .desktop-hide { display: none; }';document.getElementsByTagName('head')[0].appendChild(s);delete s} delete h}catch(e){}</script>
...
</head>
```

```
<head>
...
<script src="css-device.classes.min.js" defer type="text/javascript"></script>
...
</head>
```
### Wordpress
Add the content of [functions.php](wordpress/functions.php) to your theme's function.php file or install the plugin [css-device-classes.zip](wordpress/css-device-classes.zip):

```
...
function css_device_classes() {
    echo "<!--CSS-Device-Classes--><script>try{h=document.getElementsByTagName('html')[0].classList;if(!h.contains('device-classes')){try{u=navigator.userAgent||navigator.vendor||window.opera;if(/android/i.test(u))h.add('device-classes','is-android','is-not-iphone','is-mobile','is-not-desktop');else if(/iPhone/i.test(u))h.add('device-classes','is-not-android','is-iphone','is-mobile','is-not-desktop');else h.add('device-classes','is-not-android','is-not-iphone','is-not-mobile','is-desktop');delete u}catch(e){h.add('device-classes','is-not-android','is-not-iphone','is-not-mobile','is-desktop')} s=document.createElement('style');s.type='text/css';s.innerHTML='.is-not-android .android-only, .is-not-iphone .iphone-only, .is-not-mobile .mobile-only, .is-not-desktop .desktop-only, .is-android .android-hide, .is-iphone .iphone-hide, .is-mobile .mobile-hide, .is-desktop .desktop-hide { display: none; }';document.getElementsByTagName('head')[0].appendChild(s);delete s} delete h}catch(e){}</script>";
}
add_action( 'wp_head', 'css_device_classes' );
...
```

## CSS Classes

### Display
- android-only
- iphone-only
- mobile-only
- desktop-only
- android-hide
- iphone-hide
- mobile-hide
- desktop-hide

### Selector
- is-android
- is-iphone
- is-mobile
- is-desktop
- is-not-android
- is-not-iphone
- is-not-mobile
- is-not-desktop
- device-classes


## Usage

### Show only on a specific device
```
<p class="android-only">Only visible on android devices.</p>
<p class="iphone-only">Only visible on iphones.</p>
<p class="mobile-only">Only visible on mobiles. (android or iphone)</p>
<p class="desktop-only">Only visible on desktops. (not mobile)</p>
```

### Hide on a device
```
<p class="android-hide">Not visible on android devices.</p>
<p class="iphone-hide">Not visible on iphones.</p>
<p class="mobile-hide">Not visible on mobiles. (android or iphone)</p>
<p class="desktop-hide">Not visible on desktops. (not mobile)</p>
```


### CSS selectors
```
.is-android { /* CSS style */ }
.is-iphone { /* CSS style */ }
.is-mobile { /* CSS style */ }
.is-desktop { /* CSS style */ }

.is-not-android { /* CSS style */ }
.is-not-iphone { /* CSS style */ }
.is-not-mobile { /* CSS style */ }
.is-not-desktop { /* CSS style */ }

```

### Demo
See [live demo](https://gf78.net/css-device-classes/) and [demo file](demo/index.html) for more examples.




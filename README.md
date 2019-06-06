# css-device-classes

Simple javascript that adds CSS classes to control style and visibility for android, iphone and desktop on your website.

- display/show only on specific devices
- hide on specific devices
- use device type in custom css selectors
- supports android, iphone and desktop






## Integration
Load css-devices-classes.js in page header, e.g.

```
<script src="https://raw.githubusercontent.com/gf78/css-device-classes/master/css-device.classes.js" type="text/javascript"></script>
```




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
<p class="desktop-hide">No visible on desktops. (not mobile)</p>
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


## CSS Classes

### Display
- android-only
- iphone-only
- mobile-only
- desktop-only
- unkown-only 
- android-hide
- iphone-hide
- mobile-hide
- desktop-hide
- unkown-hide

### Selector
- is-android
- is-iphone
- is-mobile
- is-desktop
- is-unkown
- is-not-android
- is-not-iphone
- is-not-mobile
- is-not-desktop
- is-not-unkown	


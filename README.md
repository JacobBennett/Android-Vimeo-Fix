Introducing VimeoFixr.js
=================

A super-lighweight, dead-simple jQuery plugin to detect Android browsers that won't play embedded Vimeo players.

Reference: [Android Vimeo Bug](https://vimeo.com/forums/help/topic:101891)

#Setup

Include the following libraries in your layout
* jQuery 1.7+ or Zepto 
* [FitVids.js](https://github.com/davatron5000/FitVids.js) (Optional)
* VimeoFixr.js

__Note:__ FitVids.js is only optional if you set `useFitvids` option to false.

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.fitvids.js"></script>
<script src="path/to/jquery.vimeofixr.js"></script>
```

#Usage

Include links to your mobile vimeo videos and assign a class (example: `fixThis`), then target the links with `vimeoFixr()`.

__Optional:__ Link a placeholder image to give the user the feeling of clicking on an inline video player

```html
<a href="http://www.vimeo.com/m/70387032" class="fixThis"><img src="path/to/placeholder.jpg"/></a>

<script>
  $(document).ready(function(){

    // Target your links using whatever class you assigned them
    $(".fixThis").vimeoFixr();
  });
</script>
```

If your user is visiting your site on a device not effected by the Vimeo bug, VimeoFixr.js will replace each link with a vimeo inline `iframe` player, then wrap that player in a FitVids.js container.

#Options

* `wrapper`: The class of the div your inline player will be wrapped with
* `useFitvids`: if set to 'false', FitVids.js is not required
* `detectAndroid`: will replace all links regardless of if on Android device or not

```html
<script>
  $(document).ready(function(){

    $(".fixThis").vimeoFixr(
    		{
    		wrapper: 'video-container',
    		useFitvids: true,
    		detectAndroid: true
    		}
    	);

  });
</script>
```

__Note:__ It may seem odd to have `detectAndroid` as an option, but this plugin can also be used for progressive enhancement / RWD

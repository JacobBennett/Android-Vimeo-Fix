Introducing VimeoFixr.js
=================

A super-lighweight, dead-simple jQuery plugin to detect Android browsers that won't play embedded Vimeo players.

Reference: https://vimeo.com/forums/help/topic:101891

###Setup

Include jQuery 1.7+ or Zepto, optionally FitVids.js (https://github.com/davatron5000/FitVids.js) and VimeoFixr.js in your layout.

```html
	<script src="path/to/jquery.min.js"></script>
	<script src="path/to/jquery.fitvids.js"></script>
	<script src="path/to/jquery.vimeofixr.js"></script>
```

#Usage

Include links to your videos on vimeos mobile site, give them a class (example: 'fixThis'), then target those links with 'vimeoFixr()'.

__Optional:__ Link a placeholder image to give the user the feeling of clicking on an inline video player

```html
	<a href="http://www.vimeo.com/m/70387032" class="fixThis"><img src="path/to/placeholder.jpg"/></a>
```

```javascript
<script>
  $(document).ready(function(){

    // Target your links using whatever class you assigned them
    $(".fixThis").vimeoFixr();
  });
</script>
	
```

If your user is visiting your site on a device not effected by the Vimeo bug, VimeoFixr.js will replace each link with a vimeo inline 'iframe' player, then wrap that player in a FitVids.js container.

#Options

* 'wrapper': The class of the div your inline player will be wrapped with
* 'useFitvids': if set to 'false', FitVids.js is not required
* 'detectAndroid': will replace all links regardless of if on Android device or not

```javascript
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

__Note:__ It may seem odd to have 'detectAndroid' as an option, but this plugin can also be used for progressive enhancement / RWD

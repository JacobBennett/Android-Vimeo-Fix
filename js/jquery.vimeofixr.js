/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* vimeoFixr 1.0
*
* Copyright 2013, Jake Bennett - http://jakebennett.net
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Dependency on FitVids by Chris Coyier and Dave Rupert
* https://github.com/davatron5000/FitVids.js
*
* Date: Thu July 25 13:00:00 2013 -0600
*/

(function($){

    $.fn.vimeoFixr = function(options) {
        
        var defaults = {wrapper: 'video-container', useFitvids: true, detectAndroid: true};

        function checkAndroid() {
            var nua = navigator.userAgent,
                is_android = (nua.indexOf('Android') > -1 && ((nua.indexOf('Mozilla/5.0') > -1) || (nua.indexOf('Chrome') > -1)));

                return is_android;
        }

        function getVideoNum(hrefstring) {
            //check that were passing a string
            if(typeof hrefstring !== "string") {$.error('vimeoFixr: Didn\'t pass string to getVideoNum'); return false;}

            //grab the numbers off the end of the href
            var myPattern = /\/[0-9]{5,10}\/?/,
                myResult = hrefstring.match(myPattern);

            //strip out all slashes before returning
            return myResult[0].replace(/\//g,'');
        };

        var options = $.extend(defaults, options);

        //early return if checking for android and it is an effected browser
        if(options.detectAndroid && checkAndroid()) { return true;}

        //HTML replacement
        this.each(function() {
            var $this = $(this),
                videolink = getVideoNum($this.attr('href')),
                repHtml = $("<div class='" + options.wrapper + "'><iframe src='http://player.vimeo.com/video/" + videolink + "?title=0&amp;byline=0&amp;portrait=0' width='450' height='253' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>");

            $this.replaceWith(repHtml);

        });

        //fitVids wrapping
        if(options.useFitvids) {return $("."+options.wrapper).fitVids();}

        return $('.'+options.wrapper);

    };


})(jQuery);
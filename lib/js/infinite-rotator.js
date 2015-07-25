// Copyright (c) 2010 TrendMedia Technologies, Inc., Brian McNitt. 
// All rights reserved.
//
// Released under the GPL license
// http://www.opensource.org/licenses/gpl-license.php
//
// **********************************************************************
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
// **********************************************************************

jQuery(window).load(function() { //start after HTML, images have loaded

    var InfiniteRotator = {
        init: function() {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 100;

            //interval between items (in milliseconds)
            var itemInterval = 400;

            //cross-fade time (in milliseconds)
            var fadeTime = 0;

            //count number of items
            var numberOfItems = jQuery('#rotating-item-wrapper .rotating-item').length;

            //set current item
            var currentItem = 0;

			// Hide all slides to start with.
			jQuery('#rotating-item-wrapper .rotating-item').hide();

            //show first item
            jQuery('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items
            var infiniteLoop = setInterval(function() {
                jQuery('#rotating-item-wrapper .rotating-item').eq(currentItem).css({"xposition": "absolute"}).fadeOut(fadeTime);

                if (currentItem == numberOfItems - 1) {
                    currentItem = 0;
                } else {
                    currentItem++;
                }
                jQuery('#rotating-item-wrapper .rotating-item').eq(currentItem).css({"xposition":"absolute", "top":"0"}).fadeIn(fadeTime);

            }, itemInterval);
        }
    };

    InfiniteRotator.init();

});
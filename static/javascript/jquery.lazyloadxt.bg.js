/*! Lazy Load XT v1.0.4 2014-05-30
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */

// (function ($) {
//     var options = $.lazyLoadXT,
//         bgAttr = options.bgAttr || 'data-bg';

//     options.selector += ',[' + bgAttr + ']';

//     $(document).on('lazyshow', function (e) {
//         var $this = $(e.target);
//         $this
//             .css('background-image', "url('" + $this.attr(bgAttr) + "')")
//             .removeAttr(bgAttr);
//     });

// })(window.jQuery || window.Zepto || window.$);


(function ($) {
 var options = $.lazyLoadXT,
  bgAttr = options.bgAttr || 'data-bg';

  options.selector += ',[' + bgAttr + ']';

  $(document).on('lazyshow', function (e) {
      var $this = $(e.target);
      //If this element has this bgAttr attibute, then...
      if ($this.is("["+bgAttr+"]")) {

        $('<img/>').attr('src', $this.attr(bgAttr) ).load(function(){
         //We load the image into an <img> and then immediately delete it once the image is loaded
        //Now that it's cached, when we set the bg-image it'll be instant.
          $(this).remove();
          $this
              .css('background-image', "url('" + $this.attr(bgAttr) + "')")
              .removeAttr(bgAttr)
              .removeClass('lazy-hidden'); //I had to add this cause I was using the css fade-in css code and the opacity was set to 0.
        })
      }

  });
})(window.jQuery || window.Zepto || window.$);

var Site = {
	init: function() {
		Site.header();
		Site.slider();
		Site.smoothScroll();
		Site.menu();
	},
	menu: function() {
		$(document).on('click', '.menu-toggle, .mobile-menu a', function(){
			$('body').toggleClass('menu-open');
		});
	},
	slider: function() {
		$('.carousel').slick({
			autoplay: true,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			fade: true
		});
	},
	smoothScroll: function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
	  });
	},
	header: function() {
      $(document).ready(function(){
        // Change this to the correct selector.
        $('header').midnight();
      });
	}
}

$(document).ready(function(){
	Site.init();
});

$(document).foundation();
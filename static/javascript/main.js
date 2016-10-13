var Site = {
	init: function() {
		Site.header();
		Site.slider();
		Site.smoothScroll();
		Site.transitions();
		Site.technology();

		$(window).lazyLoadXT({
			onComplete: Site.lazyLoadComplete()
		})
	},
	lazyLoadComplete: function(){
		$('section').animate({ opacity: 1 }, 500);
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
	technology: function(){
		if ( $('#advantages').length ) {

			$('#advantages').find('p').first().addClass('lead');

			$('#Layer_1 g.item').mouseenter(function(e){
				if ( $(this).hasClass('active') ) {
				  return;
				}

				if (!$(this).find('.description')) {
				  return;
				}

				$(this).addClass('active');

				var _this = $(this);
				var text = $(this).find('.description').text();
				var textElement = $('<div>').html('<p style="margin-bottom: 0;">'+text+'</p>').addClass('popover');

				textElement.appendTo('body').css({
				  zIndex: 999,
				  backgroundColor: '#fff',
				  border: '1px solid #ddd',
				  position: 'absolute',
				  top: e.pageY,
				  left: function(){
				    if ( e.pageX > ( $(window).width() / 2 ) ) {
				      return e.pageX - 400;
				    } else {
				      return e.pageX;
				    }
				  },
				  padding: '1em',
				  color: '#999',
				  width: '400px'
				}).hide().fadeIn();
			})

			$('#Layer_1 g.item').mouseleave(function(){
				$(this).removeClass('active');
				$('.popover').fadeOut();
			});
		}
	},
	transitions: function(){

		var $page = $('#main'),
			options = {
				blacklist: '.noajax',
				forms: '',
				prefetch: true,
				cacheLength: 2,
				onStart: {
		          duration: 250,
		          render: function ($container) {
		          		$('section').fadeOut(250);
			            $('body').removeClass('menu-open')
		          }
		        },
				onReady: {
					duration: 0,
					render: function($container, $newContent) {
						$container.html($newContent)
						$('section').css({ opacity: 0 });
					}
				},
				onAfter: function() {
					Site.init()
					$(document).foundation();
				}
			}
		smoothState = $page.smoothState(options).data('smoothState')
	},
	header: function() {
      $(document).ready(function(){
        $('header').midnight();
      });
	}
}

$(document).ready(function(){
	Site.init();
});

$(document).foundation();

$(document).on('click', '.menu-toggle, .mobile-menu a', function(){
	$('body').toggleClass('menu-open');
});


$(document)
    .on('formvalid.zf.abide', function(event){
      event.preventDefault();

      var form = $('form');
      var data = $('form').serialize();

      form.addClass('loading');

      $.ajax({
          url: "https://formspree.io/xlelrpzm",
          method: "POST",
          data: data,
          dataType: "json",

          success: function(data, status){
            form.slideUp();
            $('body').animate({scrollTop: 0});
            $('.form-success').removeClass('hide').slideUp(0).slideDown();
          },

          error: function(data, status, err) {
            form.slideUp();
            $('body').animate({scrollTop: 0});
            $('.form-error').removeClass('hide').slideUp(0).slideDown();
          }
      });
    })
    .on("submit", function(event) {
      event.preventDefault();
    });
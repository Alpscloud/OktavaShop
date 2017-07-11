var ProjectApp = function (){
	// ============================ All vars ================================
	var copyrightYear = document.getElementById('year');
	// ============================================================
	// ============================Helper functions ================================
	function addClass(elem, clas) {
		elem.classList.add(clas);
	}
	function removeClass(elem, clas) {
		elem.classList.remove(clas);
	}	
	// ============================================================

	// ============================Price filter================================
	var select = document.getElementById('ot');



	var html5Slider = document.getElementById('priceRange');

	noUiSlider.create(html5Slider, {
		start: [ 0, 0 ],
		connect: true,
		range: {
			'min': 0,
			'max': 1000000
		}
	});

	var inputNumber = document.getElementById('do');

	html5Slider.noUiSlider.on('update', function( values, handle ) {

		var value = values[handle];

		if ( handle ) {
			inputNumber.value = parseInt(value);
		} else {
			select.value = Math.round(value);
		}
	});

	select.addEventListener('change', function(){
		html5Slider.noUiSlider.set([this.value, null]);
	});

	inputNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});
	// ============================================================
};

window.addEventListener('DOMContentLoaded', function() {
	new ProjectApp();
}) 
// ============================================================

// ========= ========= ========= JQUERY =========== ========= =========

$(document).ready(function() {
	//  ========= M a i n   v a r i a b l e s =========
	var html = $('body').width();
	// ========= =========== =========== ===========
	// ========== G o   t o   u p   b t n ==========
	var top_show = 150,
		delay = 1000; 

	$(window).scroll(function () {
		if ($(this).scrollTop() > top_show) $('.btn__up').fadeIn();
		else $('.btn__up').fadeOut();
	});

	$('.btn__up').click(function () { 
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
	// ========= =========== =========== ===========

	// ========= S m o o t h   s c r o l l i n g   t o   t h e   a n c h o r s ===========
	$('.smooth__scroll').on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('html, body').animate({scrollTop: top}, 'slow');
	});	
	// ========= =========== =========== ===========

	// Hamburger mobile menu
	$('#hamburger').on('click', function() {
		if(html < 768) {
			$('.nav__list').stop().slideToggle(300);
		}
	});
	$('.aside__title').on('click', function() {
		if(html < 768) {
			$(this).next().stop().slideToggle(300);
		}
	});
	$('.tabs__title').on('click', function() {
	
		$(this).next().stop().slideToggle(500);
	
	});
	// ========= =========== =========== ===========
	$('.aside__filter--select').on('change', function() {
		 $(this).next().text($(this).val()).addClass('active');
		 if($(this).val() === 'Не выбрано') {
		 	$(this).next().removeClass('active');
		 }

	});

	// Popup

	$('.overlay').on('click',function() {
		$(this).fadeOut(300);
		$('.popup').fadeOut(300);
	});
	$('.close').on('click',function() {
		$('.overlay').fadeOut(300);
		$('.popup').fadeOut(300);
	});

	$('.js-popup-reg-btn').on('click', function() {
		$('.overlay').fadeIn(300);
		$('.js-popup-registration').fadeIn(300);
	});

	$('.js-popup-enter-btn').on('click', function() {
		$('.overlay').fadeIn(300);
		$('.js-popup-enter').fadeIn(300);
	});

	// ========= Banner Slider ===========
	var swiper = new Swiper('.swiper-container', {

        paginationClickable: true,

        spaceBetween: 30,
        effect: 'fade',
        autoplay: 3500,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    // ========= =========== =========== ===========

	var maxheight = 0;

	$(".adv__item--title").each(function() {
	  	if($(this).height() > maxheight) { maxheight = $(this).height(); }
	});

	$(".adv__item--title").height(maxheight);

	// Contact Tabs

	$('.js-tab-content').not(":first").hide();
	$('.js-product-tab-content').not(":first").hide();

	$(".js-tab-btn").click(function() {
		$(".js-tab-btn").removeClass("active").eq($(this).index()).addClass("active");
		$(".js-tab-content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".js-product-tab-btn").click(function() {
		$(".js-product-tab-btn").removeClass("active").eq($(this).index()).addClass("active");
		$(".js-product-tab-content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.js-tab-btn').click(function() {
		if(html < 768) {
			$(this).parent().parent().stop().slideToggle(500);
		}
	});
	// ========= =========== =========== ===========

	// ========= Product slider ===========
	$('.bxslider').bxSlider({
  		pagerCustom: '#bx-pager',
  		adaptiveHeight: true,
  		nextText: '',
  		prevText: ''
	});
	// ========= =========== =========== ===========
	// ========= Quantity input ===========
	$('.quantity__input').on('click', function(event) {
		var input = $(this).find('.js-quantity-input'),
			value = input.val(),
			target = $(event.target);
		
		if(target.attr('data-action') === 'plus') {
			value++;
			input.val(value);
			

		} else if(target.attr('data-action') === 'minus') {	
			if(input.val() <= 0) {return};
			value--;	
			input.val(value);
			
		}

	});
	// ========= =========== =========== ===========

	// ========= O w l   c a r o u s e l ===========

	$('#sliderNew').owlCarousel({
	    loop:true,
	    autoHeight: false,
	    dots:false,
	    navText:['',''],
	    nav:true,
	    navElement: 'button',
	    navContainer: '#navigationNew',
	    navSpeed:300,
	    responsive:{
	    	1000: {
	    		items: 4
	    	},
	    	768: {
	    		items: 3
	    	},

	    	500: {
	    		items: 2
	    	},
	    	320: {
	    		items: 1,
	    		center:true
	    	}
	    }
	   
	});
	$('#sliderHits').owlCarousel({
	    items:4,
	    loop:true,
	    autoHeight: false,
	    dots:false,
	    navText:['',''],
	    nav:true,
	    navElement: 'button',
	    navContainer: '#navigationHits',
	    navSpeed:300,
	    responsive:{
	    	1000: {
	    		items: 4
	    	},
	    	768: {
	    		items: 3
	    	},

	    	500: {
	    		items: 2
	    	},
	    	320: {
	    		items: 1,
	    		center:true
	    	}
	    }
	   
	});
	// ========= =========== =========== ===========


	// ========= D i s a b l e   m a p    s c r o l l i n g ===========
	var onMapMouseleaveHandler = function (event) {
		var that = $(this);

		that.on('click', onMapClickHandler);
		that.off('mouseleave', onMapMouseleaveHandler);
		that.find('iframe').css("pointer-events", "none");
	};

	var onMapClickHandler = function (event) {
		var that = $(this);

		that.off('click', onMapClickHandler);
		that.find('iframe').css("pointer-events", "auto");
		that.on('mouseleave', onMapMouseleaveHandler);
	};
	// Enable map zooming with mouse scroll when the user clicks the map
	$('.google__map').on('click', onMapClickHandler);
	// ========= =========== =========== ===========

	

	// ========= R e m o v e   c l a s s e s ===========
	$('.form__input--validate').on('focus',function() {
		if($(this).hasClass('validate')) {
			$(this).removeClass('validate');
			$(this).next().addClass('hidden');
		}
	});
	// ========= =========== =========== ===========

	// ========= Ajax form ===========
	// $(".contact__form").submit(function(e) {
	// 	e.preventDefault();
	//  //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 		return false;
	// 	});
	$('.form__contact').submit(function(e) {
		e.preventDefault();

		var that = $(this);
			inputs = that.find('.form__input--validate'),
			flag = true;

		// Validate
		$(inputs).each(function() {
			if(!$(this).val() || $(this).val() == "") {
				$(this).addClass('validate');
				$(this).next().removeClass('hidden');
				flag = false;
			}
		});

		if(!flag) {return false;}

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: that.serialize()
		}).done(function() {
			// add active clases
			setTimeout(function() {
				// remove active classes
				that.trigger("reset");
			}, 2000);
		});

	});
	// ========= =========== =========== ===========
});
// ========= =========== =========== ===========  ========= =========== =========== ===========
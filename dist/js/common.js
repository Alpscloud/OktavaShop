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

	// ============================copyright year================================
	// var year = new Date(),
	// 	now = year.getFullYear();
	// copyrightYear.innerHTML = now
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

	$(".selector").each(function() {
	  	if($(this).height() > maxheight) { maxheight = $(this).height(); }
	});

	$(".selector").height(maxheight);


	// ========= O w l   c a r o u s e l ===========
	// $('#slider').owlCarousel({
	// 	loop:true,
	//     nav:true,
	//     dots: true,
	//     navText: ['',''],
	//     margin:20,
	//     mouseDrag: true,
	//     touchDrag: true,
	//     items:1,
	//     autoplay: true,
	//     autoplayTimeout: 2500,
	//     autoplayHoverPause: true	   
	// });

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
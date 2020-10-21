$(document).ready(function () {
    $(".slick-slider[data-slidestoshow]").each(function () {
    	var sltShow = Number(
    		$(this).data('slidestoshow')
    	);

    	$(this).slick({
	    	slidesToShow: sltShow, // Показывать слайды
	  		slidesToScroll: 1, // Скроллить (количество)
			speed: 1000,
			easing: 'easeOutQuint',
			autoplay: true,
			autoplaySpeed:5000,
			touchThreshold: 20,
			waitForAnimate: false,
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow:1
					}
				}
			]
	    });
    });
});

$('.sl-profit').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 1000,
	easing: 'easeOutQuint',
	autoplay: true,
	autoplaySpeed:3000,
	touchThreshold: 20,
	waitForAnimate: true,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow:1
			}
		}
	]
});

$('.slider-happy-client').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 2,
	speed: 1000,
	easing: 'easeOutQuint',
	autoplay: true,
	autoplaySpeed:3800,
	touchThreshold: 20,
	waitForAnimate: true,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow:1,
				slidesToScroll: 1,
			}
		}
	]
});

$('.sl-agent').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 1000,
	easing: 'easeOutQuint',
	autoplay: true,
	autoplaySpeed:3000,
	touchThreshold: 20,
	waitForAnimate: true,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				slidesToShow:1
			}
		}
	]
});


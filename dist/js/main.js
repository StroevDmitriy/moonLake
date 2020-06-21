jQuery(window).scroll(function() {
	logoRow = jQuery('.header .logo-row');
	mainHeaderRow = jQuery('.header .main-header-row');
	if (jQuery(window).scrollTop() >= 118) {
		logoRow.addClass('fixed');
		mainHeaderRow.addClass('fullBack');
	}
	else {
		logoRow.removeClass('fixed');
		mainHeaderRow.removeClass('fullBack');
	}
});

jQuery(document).ready(function(){
	jQuery('.form-date-picker').daterangepicker({
		singleDatePicker: true,
		locale:{
			"minYear": 2018,
			'format': 'DD.MM.YYYY',
			"firstDay": 1,
			"monthNames": [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь"
			],
			"daysOfWeek": [
				"Вс",
				"Пн",
				"Вт",
				"Ср",
				"Чт",
				"Пт",
				"Сб"
			],
			"parentEl": "input",
		}
	});

	if (jQuery('#modal-form').hasClass('show')) {
		console.log('есть show!');
		jQuery('body').addClass('modal-open');
	}
	else {
		jQuery('body').removeClass('modal-open');	
	};
});
$(document).ready(init);

function init() {
	$('.press').on('click', selFirstChild);
}

function selFirstChild() {
	var $fChild = $(this).find('.rings:first-child');

	if ($fChild.hasClass('selected')) {
		$fChild.removeClass('selected');
	} else {
		$fChild.addClass('selected');
	}
}
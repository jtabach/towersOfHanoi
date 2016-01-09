var whatTower = "-1";

$(document).ready(init);

function init() {
	$('.tower').on('click', selFirstChild);
}

function selFirstChild() {

	if(whatTower === "-1") {
		$tower = $(this);
		whatTower = $tower.find('.rings').data('val');
		$ring = $tower.find('.rings:first-child');
		
		$val = $tower.find('.press').data('val');
		console.log($tower);
		console.log($tower.find('.rings').length === 0);
		if ($tower.find('.rings').length === 0) {
			whatTower = "-1";
		} else {
			$ring.addClass('selected');
		}
	} else {
		$tower1 = $(this);
		$ring1 = $tower1.find('.rings:first-child');
		$val1 = $tower1.find('.press').data('val');
		$ring.removeClass('selected');
		console.log($tower);
		console.log($tower1);
		if ($val !== $val1) {
			if ($ring.width() < $ring1.width() || $tower1.find('.rings').length === 0) {
				console.log('leggo!!!');
				var move = $ring.remove();
				$tower1.find('.press').prepend(move);
				checkForWin();
			}
		}
		whatTower = "-1";
	}
}

// function()
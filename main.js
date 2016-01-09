var whatTower = "-1";

$(document).ready(init);

function init() {
	$('.tower').on('click', selFirstChild);
}

function selFirstChild() {

	if (whatTower === "-1") {
		$tower = $(this);
		whatTower = $tower.find('.press').data('val');
		$val = $tower.find('.press').data('val');
		//$ring = $this.find('.rings:first-child');
	} else {
		$tower1 = $(this);
		$val1 = $tower1.find('.press').data('val')
		//$ring1 = $this.find('.rings:first-child');
		if ($val !== $val1) {
			console.log('leggo');
			$ring = $tower.find('.rings:first-child');
			$ring1 = $tower1.find('.rings:first-child');
			console.log($ring);
			console.log($ring1);
			if ($ring.width() < $ring1.width()) {
				console.log('leggo!!!');
				var move = $ring.remove();
				$tower1.find('.press').prepend(move);
			}
		}


	}
	






	// if ($ring.hasClass('selected')) {
	// 	$ring.removeClass('selected');
	// 	whatTower = "-1";
	// 	$ring = {};
	// 	$this = {};
	// } else {
	// 	if (whatTower === "-1") {
	// 		$ring.addClass('selected');
	// 		whatTower = $this.find('.press').data('val');
	// 	}
	// }
	// console.log(whatTower);
	// console.log($this);
	// console.log($ring);
}
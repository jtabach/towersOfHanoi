var whatTower = "-1";
var moves = 0;
var $tower;
var $tower1;
var $ring;
var $ring1;
var $val;
var $val1;
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
		if ($val !== $val1) {
			if ($ring.width() < $ring1.width() || $tower1.find('.rings').length === 0) {
				moves++;
				var move = $ring.remove();
				$tower1.find('.press').prepend(move);
				$('span').html(moves);
				checkForWin();
			}
		}
		whatTower = "-1";
	}
}

function checkForWin() {
	if ($('#tower1').find('.rings').length === 4 || $('#tower3').find('.rings').length === 4) {
		$('#winner').html("WINNER");
	}
}
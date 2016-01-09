var whatTower = "-1";
var moves = 0;
var $tower;
var $tower1;
var $ring;
var $ring1;
var $t1 = $('#tower1');
var $t3 = $('#tower3');
$(document).ready(init);

function init() {
	$('.tower').on('click', selFirstChild);
}

function selFirstChild() {

	if(whatTower === "-1") {
		$tower = $(this);
		whatTower = $tower.find('.rings').data('val');
		$ring = $tower.find('.rings:first-child');
		if ($tower.find('.rings').length === 0) {
			whatTower = "-1";
		} else {
			$ring.addClass('selected');
		}
	} else {
		$tower1 = $(this);
		$ring1 = $tower1.find('.rings:first-child');
		$ring.removeClass('selected');
		if ($ring.width() < $ring1.width() || $tower1.find('.rings').length === 0) {
			moves++;
			var move = $ring.remove();
			$tower1.find('.press').prepend(move);
			$('span').html(moves);
			checkForWin();
		}
		whatTower = "-1";
	}
}

function checkForWin() {
	if ($t1.find('.rings').length === 4 || $t3.find('.rings').length === 4) {
		$('#winner').html("WINNER");
	}
}


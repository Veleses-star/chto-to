

let n = 1;
let y = 0;
$("#triggerImg").click(function() {

	if ( y == 0 ) {
		style = {'border-width':'5px'};
	}

	if ( y == 19 ) {
		n = 1;
		style = {'border-color':'yellow'};
	}

	if (y == 38 ) {
		n = 1;
		style = {'transform':'rotateX(25deg) translateZ(5px)'};
	}

	$(`#triggerImg:nth-child(${n})`).css(style);

	n++;
	y++;
 })
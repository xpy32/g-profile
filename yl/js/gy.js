/* ===================================================
 * gy.js v1.0
 *
 * ===================================================
 * Copyright 2012 Guang Yang.
 *
 * ========================================================== */
 
 // change the style of top nav
function changeCurrentPageLinkStyle(){
	var indicator = $("#gy-page-indicator").val();
	switch (indicator){
		case 'home':
		$("#gy-home-link").addClass('active');
		break;
		case 'portfolio':
		$("#gy-portfolio-link").addClass('active');
		break;
}
}
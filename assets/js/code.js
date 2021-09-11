function openMenu() {
	$("#menu-closer").show();
	$("#menu-opener").hide();
	$("#nav").show();
	$("#main").hide();
	return false;
}
function closeMenu() {
	$("#menu-closer").hide();
	$("#menu-opener").show();
	$("#nav").hide();
	$("#main").show();
	return false;
}
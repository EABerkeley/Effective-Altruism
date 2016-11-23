/* Open when someone clicks on the span element */
function openNav() {
	//if($(this).hasClass('openbtn'))
	{
	document.getElementById("menu-bar").style.width= "100%";
	$(this).toggleClass('close');
	}
	//else closeNav();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("menu-bar").style.width = "0%";
}

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
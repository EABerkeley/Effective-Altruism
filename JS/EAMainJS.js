/* Open when someone clicks on the span element */
function closeNav() {
    document.getElementById("menu-bar").style.width = "100%";
}
function openNav() {
	if($('#nav-icon1').hasClass('open')==true)
		{
			closeNav();
		}
	else
	{
	document.getElementById("menu-bar").style.width= "0%";
	$(this).toggleClass('close');
	console.log("It's true")
	}
	
}

/* Close when someone clicks on the "x" symbol inside the overlay */


$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});
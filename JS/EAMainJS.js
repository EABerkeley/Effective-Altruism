/* Open when someone clicks on the span element */
function openNav() {
	var openclose='document.getElementById("menu-bar").style.width';
    openclose = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("menu-bar").style.width = "0%";
}

function transform(x) {
    x.classList.toggle("change");
}
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
    // document.getElementById("nav-bar").style.backgroundColor = "hsla(0, 0%, 20%, 0.85)";
  } else {
    document.getElementById("nav-bar").style.top = "-144px";
  }
  prevScrollpos = currentScrollPos;
}

/* Show and hide popup window */
window.onload = function() {
	$("#popup").show();
	$("#close-button").click(function() {
		$("#popup").hide();
		return false;
	});
};

/* Collapse menu in response to screen size*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "col-xs-6 col-sm-6 col-md-6 col-lg-6 menu") {
    x.className = "col-xs-4 col-sm-4 col-md-4 col-lg-4 menu responsive text-right";
  } else {
    x.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6 menu";
  }
}
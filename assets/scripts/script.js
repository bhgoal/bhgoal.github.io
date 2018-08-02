$( document ).ready(function() {
    $("a.nav-link.active").css("color", "rgb(0, 0, 0)");
	$("a.nav-link").not(".active").css("color", "rgba(0, 0, 0, 0.247");
});

$("body").scrollspy({target: "#navbarSupportedContent"})


// Add smooth scrolling to all links
$(".nav-item, .navbar-brand").on("click", function(event) {
	$("body").scrollspy("dispose")
	$("a").removeClass("active");
	$(this).addClass("active");
	if (this.hash === "#pageTop") {
		$("#navHome").addClass("active");
	}
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			$("body").scrollspy({target: "#navbarSupportedContent"})
		});
	}
});




var navForced = false;
$(window).scroll(function() {
    var height = $(window).scrollTop();
    getMultiplier(height, 100, 492);
});

function getMultiplier(height, rangeMin, rangeMax) {
	var multiplier = (height - rangeMin) / (rangeMax - rangeMin);
	if (height < rangeMin) {
		multiplier = 0;
	}
	if (height > rangeMax) {
		multiplier = 1;
	}
	changeNav(multiplier);
	
}


function changeNav(multiplier) {
	var opacity = multiplier;
	var color = Math.floor((multiplier) * 255);
	var textOpacity = (0.2 * multiplier) + 0.3;
	$("#mainNav").css("background", `rgba(24, 24, 24, ${opacity})`);
	$("a.nav-link.active").css("color", `rgb(${color}, ${color}, ${color})`);
	$("a.nav-link").not(".active").css("color", `rgba(${color}, ${color}, ${color}, ${textOpacity})`);
	$("#homeArrow").css("opacity", `${opacity}`);
	if (opacity < 0.1) {
		$("a.navbar-brand").css("visibility", "hidden");
	} else {
		$("a.navbar-brand").css("visibility", "visible");
	}
}

function forceNav(opacity) {
	$("#mainNav").css("background", `rgba(24, 24, 24, ${opacity})`);
	// navForced = true;
}


var captionFade;
$('#list-tab a').on('click', function (e) {

	clearTimeout(captionFade);
	e.preventDefault();	
	e.stopPropagation();
	$(this).tab('show')
	setTimeout(captionReset, 200);
	captionFade = setTimeout(captionFadeIn, 220);
})

setTimeout(captionFadeIn, 220);





function captionReset() {
	$(".imgCaption").css("top", "500px");
};


function captionFadeIn() { 
 //$(".imgCaption").fadeIn(1000); //.fadeIn(250)
 $(".imgCaption").animate({top: "250px"});
};


captionFade();
// Image caption fade in/out effect
function captionFade() {
    $("[rel='tooltip']").tooltip();    
 
    $(".img-thumbnail").hover(
        function(){
            $(this).find(".imgCaption").fadeTo(250, 0.4); //.fadeIn(250)
        },
        function(){
            $(this).find(".imgCaption").fadeTo(250, 0.9); //.fadeOut(205)
        }
    ); 
};



function captionHover() {
	$(".img-thumbnail").hover(
		function(){
			$(".imgCaption").css("background", "rgba(196, 196, 196, 0.8)")
		}
	);
}

panelCaption();
function panelCaption() {
	$("[rel='tooltip']").tooltip();  
	  
    $(".project").hover(
        function(){
            $(this).find(".panelCaption").fadeIn(250); //.fadeIn(250)
        },
        function(){
            $(this).find(".panelCaption").fadeOut(250); //.fadeOut(205)
        }
    ); 
};
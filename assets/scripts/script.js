$("body").scrollspy({target: "#navbarSupportedContent"})


// Add smooth scrolling to all links
$(".nav-item").on("click", function(event) {
	$("body").scrollspy("dispose")
	$("a").removeClass("active");
	$(this).addClass("active");
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



$('#list-tab a').on('click', function (e) {
	e.preventDefault();	
	e.stopPropagation();
	$(this).tab('show')
	setTimeout(captionReset, 200);
	setTimeout(captionFadeIn, 1000);
})

setTimeout(captionFadeIn, 1000);





function captionReset() {
	$(".imgCaption").css("top", "500px");
};


function captionFadeIn() { 
 //$(".imgCaption").fadeIn(1000); //.fadeIn(250)
 $(".imgCaption").animate({top: "100px"});
};



// Image caption fade in/out effect
function captionFade() {
    $("[rel='tooltip']").tooltip();    
 
    $(".img-thumbnail").hover(
        function(){
            $(this).find(".imgCaption").fadeIn(250); //.fadeIn(250)
        },
        function(){
            $(this).find(".imgCaption").fadeOut(250); //.fadeOut(205)
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
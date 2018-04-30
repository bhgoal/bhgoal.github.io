$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
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
			});
		}
    });
  });

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
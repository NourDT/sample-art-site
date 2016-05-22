
$(document).ready(function(){
		$("#menu").mmenu({
			offCanvas: {
				position: "right",
				pageSelector: '#page_wrapper'
			}

		});
	$('#main-banner').height($(window).height() - $('#header').height());

    if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".effects .img").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".effects .img").mouseenter(function() {
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  } 
  // function stick(){
    
  //   var target = $('#categories .category:nth-of-type(4)');
  //   var offset = $('#categories .category:nth-of-type(4)').offset();
  //   $('#categories .category:last-of-type').animate(
  //     'left', offset.left + $('#categories .category:nth-of-type(4)').outerWidth() 
  //   );
  //   console.log('hi')
  //   window.setTimeout(stick(), 30);
  // };
  // stick();
});




$(document).ready(function() {
	

 
    // $(".bottom_button").mouseover(function() {
    // 	$(".bottom_button").fadeTo(1000, 0.2);
    // });
 
 //   $("a").mouseenter(function() {
	// 	$(this).fadeTo(1000, 0.4);
	// });

 //   $("a").mouseleave(function() {
	// 	$(this).fadeTo(1000, 1);
	// });
   
    // $("img").click(function () {
    // 	if($(this).attr("src") == "img/3.png"){
    // 		$(this).attr("src", "img/1.png");
    // 	} else if($(this).attr("src") == "img/2.png"){
    // 		$(this).attr("src", "img/3.png");
    // 	} else if($(this).attr("src") == "img/1.png"){
    // 		$(this).attr("src", "img/2.png");
    // 	}
    // });
 
    $("p").click(function() {
    	$(this).parent("div").css("background-color", "lemonchiffon");
    });
    
    
    
    $("p").click(function() {
    	$(this).children("a").css("color", "red");
    });
 
    $("h2").click(function() {
    	$(this).next().css("font-size", "1.5em");
    });
    
    $("p").mouseover(function() {
    	$(this).prev().css("font-size", "1.5em");
    });
    
    
 
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


 }); 

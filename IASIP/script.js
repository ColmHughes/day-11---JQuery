$(document).ready(function(){
    
 
    $(".dennis").mouseenter(function() {
    	$(this).css("color", "red");
    	$(this).children("span").css("color", "red");
    	$(this).children("span").show();
    });
 
    $(".dennis").mouseleave(function() {
	   $(this).siblings().fadeTo(500,1);
	   $(this).css("color", "black");
	   $(this > "span").css("color", "black");
	   $("span").hide();
    });
 
 
    $('.carousel').carousel()
 
 
});
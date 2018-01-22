$(document).ready(function(){
    
    
    // $(".theButton").click(function() {
    //     $(".theButton").hide();
    // });
 
    // $(".theButton").click(function() {
    //      $(this).hide();
    // });
 
    $(".container").click(function() {
    	$(this).siblings().fadeTo(1000, 0.2);
    });
    
 
    $(".superButton").click(function() {
      $(".container").fadeTo(500,1); 
    });
    
    // $(".theButton").mouseover(function() {
    //   $(this).css("background-color", "black");
    // });
 
 
 
 
 
 
});
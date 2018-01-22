$(document).ready(function() {
    
    //   $("#switch1").click(function () {
    // 	if($(this).attr("src") == "img/switch_off.png"){
    // 		$(this).attr("src", "img/switch_on.png");
    // 		$("#bulb1").attr("src", "img/bulbon.gif");
    // 	} else if ($(this).attr("src") == "img/switch_on.png") {
    // 	    $(this).attr("src", "img/switch_off.png");
    // 		$("#bulb1").attr("src", "img/bulboff.gif");
    //   }
    //   });
      
    //   $("#switch2").click(function () {
    // 	if($(this).attr("src") == "img/switch_off.png"){
    // 		$(this).attr("src", "img/switch_on.png");
    // 		$("#bulb2").attr("src", "img/bulbon.gif");
    // 	} else if ($(this).attr("src") == "img/switch_on.png") {
    // 	    $(this).attr("src", "img/switch_off.png");
    // 		$("#bulb2").attr("src", "img/bulboff.gif");
    // 	}
    //   });
      
      
    //   $("#switch3").click(function () {
    // 	if($(this).attr("src") == "img/switch_off.png"){
    // 		$(this).attr("src", "img/switch_on.png");
    // 		$("#bulb3").attr("src", "img/bulbon.gif");
    // 	} else if ($(this).attr("src") == "img/switch_on.png") {
    // 	    $(this).attr("src", "img/switch_off.png");
    // 		$("#bulb3").attr("src", "img/bulboff.gif");
    // 	}
    //   });
    
    
    
    
    
       function toggleButtons() {
	        if($("#switch1").attr("src") == "img/switch_off.png"){
	            $("#switch1").attr("src", "img/switch_on.png");
        	    $("#bulb1").attr("src", "img/bulbon.gif");
    		    $("#bulb3").attr("src", "img/bulbon.gif");
    		    $("#switch2").attr("src", "img/switch_on.png");
    	    } else {
    	        $("#bulb1").attr("src", "img/bulboff.gif");
    		    $("#switch2").attr("src", "img/switch_off.png");
    		    $("#bulb3").attr("src", "img/bulboff.gif");
    		    $("#switch1").attr("src", "img/switch_off.png");
    	    }
	   }
    
    //   toggleButtons();
    
    
    
    
    
    
      $("#switch1").click(function () {
            toggleButtons();
      });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     $("#switch1").click(function () {
    // 	if($(this).attr("src") == "img/switch_off.png"){
    // 		$(this).attr("src", "img/switch_on.png");
    // 		$("#bulb1").attr("src", "img/bulbon.gif");
    // 		$("#bulb3").attr("src", "img/bulbon.gif");
    // 		$("#switch2").attr("src", "img/switch_on.png");
    // 	} else if ($(this).attr("src") == "img/switch_on.png") {
    // 	    $(this).attr("src", "img/switch_off.png");
    // 		$("#bulb1").attr("src", "img/bulboff.gif");
    // 		$("#switch2").attr("src", "img/switch_off.png");
    // 		$("#bulb3").attr("src", "img/bulboff.gif");
    //   }
    //   });
      
       $("#switch2").click(function () {
    	if($(this).attr("src") == "img/switch_off.png"){
    		$(this).attr("src", "img/switch_on.png");
    		$("#bulb2").attr("src", "img/bulbon.gif");
    		$("#bulb1").attr("src", "img/bulbon.gif");
    	} else if ($(this).attr("src") == "img/switch_on.png") {
    	    $(this).attr("src", "img/switch_off.png");
    		$("#bulb2").attr("src", "img/bulboff.gif");
    		$("#bulb1").attr("src", "img/bulboff.gif");
    	}
      });
      
      
       $("#switch3").click(function () {
    	if($(this).attr("src") == "img/switch_off.png"){
    		$(this).attr("src", "img/switch_on.png");
    		$("#bulb3").attr("src", "img/bulbon.gif");
    		$("#bulb2").attr("src", "img/bulbon.gif");
    		$("#bulb1").attr("src", "img/bulbon.gif");
    	} else if ($(this).attr("src") == "img/switch_on.png") {
    	    $(this).attr("src", "img/switch_off.png");
    		$("#bulb3").attr("src", "img/bulboff.gif");
    		$("#bulb2").attr("src", "img/bulboff.gif");
    		$("#bulb1").attr("src", "img/bulboff.gif");
    	}
      });
});
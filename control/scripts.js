
// a variable to store the number of times the button has been clicked
var dogs = 0;

$("#add").on("click",function() {
    if(dogs === 0){ 
  		$(".one").css('opacity', '1')
  		dogs++;
    } 
    
    else if(dogs === 1){
        $(".two").css('opacity', '1');
        dogs++;
    }
     
    else if(dogs === 2){
        $(".three").css('opacity', '1');  
        dogs++;  
    }

    else if(dogs === 3){
        $(".four").css('opacity', '1'); 
        dogs++;   
    }
    
    else if(dogs === 4){
        $(".five").css('opacity', '1');    
    }
    // ...
    
    // this increments our dogs variable by 1 
    // each time the button is clicked
    
});


$("#subtract").on("click",function() {
    if(dogs === 0){ 
  		$(".one").css('opacity', '0');
    } 
    
    if(dogs === 1){
        $(".two").css('opacity', '0');
        dogs--;
    }
     
    if(dogs === 2){
        $(".three").css('opacity', '0'); 
        dogs--;   
    }
    
    if(dogs === 3){
        $(".four").css('opacity', '0'); 
        dogs--;   
    }

    if(dogs === 4){
        $(".five").css('opacity', '0'); 
        dogs--;   
    }
    // ...
    
    // this increments our dogs variable by 1 
    // each time the button is clicked
    
});

// dance //

$("#dance").on("click",function(){

  $(".dog").toggleClass("spin");

});


// slep //


$("#sleep").click(function(){

    $(".dog").toggleClass("hide");
    $(".sleepy").toggleClass("hide");

    $("body").toggleClass("sleeping");

});

// drag //

$( function() {
    $( ".draggable" ).draggable();
  } );












$("#dark-btn").click(function(){

  $(".box").toggleClass("dark");
  $("body").toggleClass("dark");

});

$("#glow-btn").click(function(){

  $(".box").toggleClass("glow");

});

$("#spin-btn").click(function(){

  $(".box").toggleClass("spin");

});

$("#reveal-btn").click(function(){

  $(".flower").css('opacity', '1');
  $(this).hide();

});


$( function() {
    $( ".draggable" ).draggable();
  } );
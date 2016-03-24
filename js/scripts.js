$(document).ready(function() {
  // Set value of sides
  $("#sides").submit(function(event) {
    var side1 = parseInt($("input#side1")val());
    var side2 = parseInt($("input#side2")val());
    var side3 = parseInt($("input#side3")val());

    if (side1, side3 === side2) {
    $("#equilateral").show();
  } else if (){
    (COMPARISON)
    $('#isosceles').show();
  } else if (){
    (COMPARISON)
    $('#scalene').show();
  } else (){
    (COMPARISON)
    $('#not-a-triangle').show();
  }
    //check syntax of else
    event.preventDefault();
  });
});

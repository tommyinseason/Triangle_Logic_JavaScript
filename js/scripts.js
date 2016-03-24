$(document).ready(function() {
  // Set value of sides
  $("form").submit(function(event) {
    var side1= $("#side1").val();
    var side2= $("#side2").val();
    var side3= $("#side3").val();
    console.log(side1, side2, side3);

    if (side1 === side2 && side2 === side3 && side1 != 0){
    $('#equilateral').show();
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
      $('#not-a-triangle').show();
    } else if (side1 === side2 && side1 != side3 || side2 === side3 && side2 != side1 || side1=== side3 && side1 != side2) {
      $('#isosceles').show();
    } else if (side1 != side2 && side1 != side3 || side2!= side3 && side2 != side1 || side3 != side1 && side3 != side2){
      $('#scalene').show();
    }
    //check syntax of else
    event.preventDefault();
  });
});

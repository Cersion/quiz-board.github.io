// Business (or back-end) logic:
var add = function(number1, number2 ,number3 ,number4 ,number5 ,number6 ,number7 ,number8 ,number9 ,number10) {
  return number1 + number2 +number3 +number4 +number5 +number6 +number7 +number8 +number9 +number10;
};




// User interface (or front-end) logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input:radio[name=answer1]:checked").val());
    var number2 = parseInt($("input:radio[name=answer2]:checked").val());
    var number3 = parseInt($("input:radio[name=answer3]:checked").val());
    var number4 = parseInt($("input:radio[name=answer4]:checked").val());
    var number5 = parseInt($("input:radio[name=answer5]:checked").val());
    var number6 = parseInt($("input:radio[name=answer6]:checked").val());
    var number7 = parseInt($("input:radio[name=answer7]:checked").val());
    var number8 = parseInt($("input:radio[name=answer8]:checked").val());
    var number9 = parseInt($("input:radio[name=answer9]:checked").val());
    var number10 = parseInt($("input:radio[name=answer10]:checked").val());
    var result = add(number1, number2,number3 ,number4 ,number5 ,number6 ,number7 ,number8 ,number9 ,number10);
    $("#output").text(result);

    if (result>24){
      $("#output2").text("Excellent")
    } else if (result>15){
      $("#output2").text("Fair")
    } else{
      $("#output2").text("Poor, Retake test")
    }
  });
});

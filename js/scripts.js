
var toLowerCase = function(sentence) {
  return sentence.toLowerCase();
};



$(document).ready(function () {
  $("form#pigLatinForm").submit(function () {
     var input = $("input#sentence").val();
     input = toLowerCase(input);
     console.log(input);
     event.preventDefault();
  });
});
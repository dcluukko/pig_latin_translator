
var toLowerCase = function(sentence) {
  return sentence.toLowerCase();
};

var wordsToLetters = function(word) {
  letter = word.split("");

  for ( var index = 0; index === 0 ; index +=1   ) {

    if (letter[0] != "a" || letter[0] != "e" || letter[0] != "i" || letter[0] != "o" || letter[0] != "u") {
     var firstChar = $(letter.slice(0,1));
     var pigLatinEnding = (firstChar[0].toUpperCase() + "ay");
      console.log(pigLatinEnding);
    } else {

    }
    
    // (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter === "u")
  }
            
};

$(document).ready(function () {
  $("form#pigLatinForm").submit(function () {
    var input = $("input#sentence").val();
    input = toLowerCase(input);
    letters = wordsToLetters(input);


    
    event.preventDefault();
  });
}); 
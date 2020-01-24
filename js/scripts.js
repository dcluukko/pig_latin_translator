
var toLowerCase = function(sentence) {
  return sentence.toLowerCase();
};

var vowelIndex;

var findFirstVowel = function(word) {
  var wordArray = word.split("");
  for ( var index = 0; index <= wordArray.length; index +=1) {
    if (wordArray[index] === "a" || wordArray[index] === "e" || wordArray[index] === "i" || wordArray[index] === "o" || wordArray[index] === "u") {
      return vowelIndex = index;
    } else {
    }
  }       
};


var pigLatinEnding = function(word) {
   var wordArray = word.split("");
   var firstChar = $(wordArray.slice(0,vowelIndex));
   var wordEnding = (firstChar[0].toUpperCase() + "ay");
  //  console.log(wordEnding);
   return wordEnding;

};

var rootWord = function(word) {
  var wordArray = word.split("");
  var endChars = wordArray.slice(vowelIndex + 1);
  var reunite = endChars.join("");
  
  // console.log(reunite);
  return reunite;
};
// var firstChar = $(wordArray.slice(0,1));
// var pigLatinEnding = (firstChar[0].toUpperCase() + "ay");

// var wordEnding = $(wordArray.slice(1));

$(document).ready(function () {
  $("form#pigLatinForm").submit(function () {
    var input = $("input#sentence").val();
    input = toLowerCase(input);
    letters = findFirstVowel(input);
    alert(vowelIndex);
    // latinEnding = pigLatinEnding(input);
    // latinMiddle = rootWord(input);
    
    event.preventDefault();
  });
}); 
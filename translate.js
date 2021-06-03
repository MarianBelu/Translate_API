var translation = "AIzaSyA3Smui3LgJVGSJlfspu2cA6aSeX_k7Js0";
var googleTranslate = require('google-translate')(translation);

var text = 'Primul meu text'
console.log("Romana :>",text);
googleTranslate.translate(text, 'en', function(err, translation) {
  console.log("Engleza :>",translation.translatedText);
});									
	


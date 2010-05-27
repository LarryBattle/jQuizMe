How to use the language argument:

You can change the language used by jQuizMe by sending in the new language object.
Example:

var newLang = { 
	ans:{
		praise: "You're getting smarter."
	}
};
$( element ).jQuizMe( quiz-data, options, newLang );

Or you can change the text inside ../js/jQuizMe-uncompressed.js
Look for the variable "_lang" at line 90.

Please refer to the online wiki for a tutorial on how to.

http://www.bateru.com/news/
Email: blarry@bateru.com
- Larry Battle 


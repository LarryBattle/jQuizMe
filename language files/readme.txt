# By: Larry Battle
# Date: Mar 17, 2011
# Purpose: To explain how to change the language in jQuizMe.


- If you desire to change the language in jQuizMe, you need to do the following.

	Step 1) Defined or import a language object for jQuizMe. 
		Example: <script src="js/jpn.jQuizMe-2.js"></script>
		
	Step 2) Pass the language object as the third argument when jQuizMe is called.
		Example: $( "#quizArea" ).jQuizMe( quiz, options, jpnLang );

		
- Please be appear that the language object does not have to include all the attributes in jQuizMe default langauge object.
Only create an object with the desired language changes.
	Example:  
	// The following will only change the text and title of the next button in jQuizMe.
	var lang = { 
		btn:{ 
			next: [ "GO ON", "Next Question" ] 
		} 
	};
	$( "#quizArea" ).jQuizMe( quiz, options, lang );

- Please view the file called "language template.js" for a template of the langauge object.

More information at http://code.google.com/p/jquizme/wiki/.		
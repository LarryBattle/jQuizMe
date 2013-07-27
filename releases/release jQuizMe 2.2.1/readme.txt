### Version: jQuizMe 2.2.1
### Date: 10/08/2012
### Author: Larry Battle - blarry[at]bateru.com
### I love feedback, so tell me what you think.

Required Files: jQuery 1.4.2+, jQuizMe-2.2.1.js, jQuizMe.css

### Release Note:
	
	- Bug Fix: The gameover metrics were diabled when `options.showFeedback` was set to false.

### Release Note:
jQuizMe 2.1.9

	- Bug: ansInfo question property has been disabled.

	* Let quizInfo be the first arguement of statusUpdate, such that options.statusUpdate = function( quizInfo ){}

	- Added: quizInfo.problem is important for tracking user activity.
		# quizInfo.currIndex is the index of current question index.
		# quizInfo.problem is array of objects which corresponds to the questions presented by jQuizMe.
		# Each element in "problem" contains an object as the following.
		# { "isCorrect": boolean, "userAnswer": string, "amountTried": number }
		# Note that null is assigned to quizInfo.problem indexes for questions that have not be checked.
		# Example: problem[0].isCorrect	// Tells you if the first question was correct.
	- Added: lang.ans.retry, which has the vaule "Incorrect. Please try again.".

	- Bug Fix: multiple choice quiz types now support html.
	- Bug Fix: options.showHTML now works for answers as an array.
	- Bug Fix: options.showHTML now allows html code to be displayed when showing the correct answers.
	- Bug Fix: the default layout is resets with each new jQuizMe call.
	- Bug Fix: Extend was calling settings and lang with were undefined.

	- Changed: quizInfo has the following properties. 
		# "currIndex", "problem", "numOfRight", "numOfWrong", 
		# "score", "total", "hasQuit", "deleteQuiz", "quitQuiz", "nextQuestion"
	- Changed: The help button is disabled if options.help is not defined or blank.
	- Changed: options.statusUpdate updates on quiz creation, after intro, on next question, and gameover.
	- Changed: IE version 8 and lower will be treated special.
		# Previously, all IE were treated special.

	- Deleted: options.blockCheck has been deleted because it's not useful.

	- Misc: Faster options.showHtml unicode conversion.
	- Misc: Faster restart time.
	- Misc: Code optimization.

jQuizMe 2.1.5 (Beta)
	- Bug: html is rendered when options.showHTML = true.
	- Bug: ansInfo question property has been disabled.

	- Lots of code improvements.
	- Changed: Check and next button are now different.
	- Added: Retry functionality.
	    # The user will be forced to complete a question within a retry limit.
	- Added: options.enableRetry.   
	    # This allows for the enable or disable the retry options.
	- Added: Retry is a new question property.   
	    # Example for 4 retries { ques: "question", ans:"answer", retry: 4 }

Note: The retry question property is the number of chances that a user will get to answer a question.

jQuizMe 2.1
	- Tons of code enhancements not listed.
	
	- Added: div.q-extraStat under .statDetails to allow for inserting information on quit.
	- Added: "=" in true or false quiz types is lang.quiz.tfEqual
	- Added: "*" in the review tab is lang.btn.showOnlyMissed[0]
	- Added: Radio buttons were added to MultipleChoiceOl for the keyboard users.
	- Added: settings.showHTML. If true, this prevents html examples in your quiz data from being rendered.
	- Added: Enabled multipleChoice to has answer position selection.
		# In ansSel, a null position will be replaced with the answer.
		# Example: ansSel:[ null, "above is the answer" ]
	
	- Bug Fix: IE is now supported for all animation types.
	- Bug Fix: Changed event keydown to keypress.
	- Bug Fix: IE 6 css is now displaying correctly. The review button on gameOver is now shown.
	- Bug Fix: The right arrow and the showOnlyMissed button in the review is disabled when there is only one question.
	- Bug Fix: fxType[0] is has a speed of 0, because it's a hide and show animation.
	- Bug Fix: Safari now work. 
		# Safari has a odd bug with selecting multiple class. ex. $(".class, .class").
	- Bug Fix: The settings options is not seperate between quizzes.
	- Bug Fix: settings.statusUpdate works.
	- Bug Fix: var "show" in displayAnsResult() is now a private variable.
	
	- Changed: Default animation is type 0, which is hide and show.
	- Changed: settings.statusUpdate arguments to ( quizInfo, $currQuiz ). 
		# quizInfo object has the properties: right, score, total, tried, wrong, hasQuit, quitFunc, nextFunc.
	- Changed: the order of "review" and "details" on gameOver. 
		# "Details" is now the 1st tab and "review" is the 2nd.
	
	- Renamed: .checkThis to .clickThis
	- Renamed: animationType -> fxType, animateCode -> fxCode, animationSpeed -> fxSpeed

jQuizMe 2.0.2
	- Changed quiz type "fillInTheBlank" to get answer on keydown, instead of keypress.
		# Now the whole answer is received when check-btn is clicked.
	- Fixed IE rendering error: On restart .q-result was still being shown.

jQuizme 2.0.1
	- settings.allRandom is now false as default. 
		# This makes disabling the randomizing easier, by only disabling the setting.random. 
	- Fixed "fill" quiz type's text box. The first character typed was ignored.
	- Fixed animation glitches when check-btn was clicked.
		# CSS: Overflow was deleted.
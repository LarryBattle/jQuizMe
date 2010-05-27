### Version: jQuizMe 2.1
### Date: 12/15/2009
### Author: Larry Battle - blarry@bateru.com
### I love feedback, so tell me what you think.


### Release Note:

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
/*
Programmer: Larry Battle
Date: May 17, 2011
Purpose: This file provides a template for jQuizMe language object. 
The variable SHORT-LANGUAGE-CODE_Lang is the object template.
The variable default_Langauge is jQuizMe default language object.
More information here: http://code.google.com/p/jquizme/wiki/Translations
*/

var SHORT-LANGUAGE-CODE_Lang = {
        ans:{
                corrAns: "",
                praise: "",
                whyAns: "",
                yourAns: ""
        },
        btn:{ 
                begin: [ "", "" ],
                check: [ "", "" ],
                del: [ "", "" ],
                details: [ "","" ],
                help: ["", ""],
                next: [ "", "" ],
                restart: [ "", "" ],
                review: [ "", "" ],
                quit: [ "", "" ],
                quitYes: [ "", "" ],
                quitNo: [ "", "" ]
        },
        err:{
                badQType: "",
                badKey: ": ",
                error: "",   
                noQType: "",
                noQues: "",
                notArr: "",
                notObj: ""
        },
        stats:{
                right: "",
                rate: "",
                score: "",
                wrong: "",
                total: "",
                tried: ""
        },
        quiz:{
                tfTrue: "",
                tfFalse: ""
        }
};

var default_Langauge = {
		ans:{	// The "ans" attributes are shown during the display of .q-result(the answer result).
			corrAns: "Correct answer(s):",
			praise: 'Great Job. Right!',
			whyAns: "Info:",
			yourAns: "Your Answer:"
		},
		btn:{	
		// [ "text", "title" ], 
		// The button will display the text, and show the title when the user hover over the button.
		// The "title" is not required.
			begin: [ "Begin Quiz" ],
			check: [ "Check", "Check your answer" ],
			del: [ "Delete", "Delete quiz" ],
			help: [ "Help", 'Click for help'],
			next: [ "Next", "Next question" ],
			restart: [ "Restart", "Restart the quit over" ],
			details: [ "Details", "View score report" ],
			review: [ "Review", "Review Questions" ],
			showOnlyMissed: [ " *", "Click to show only missed questions." ],
			quit: [ "Quit", "Quit quiz" ],
			quitNo: [ "->", "Go Back" ],
			quitYes: [ '', "Yes, quit" ]
		},
		err:{
			badQType: "Invalid quiz type.",
			badKey: " is an invalid key value.",
			error: "Error",	
			noQType: "No quizTypes.",
			noQues: "Quiz has no questions.",
			notArr: "Must be an array.",
			notObj: "Invalid quiz data structure. Must be an array or object."
		},
		stats:{
			right: "Right",
			rate: "Rate",
			score: "Score",
			wrong: "Wrong",
			total: "Total",
			tried: "Tried"
		},
		quiz:{
			tfEqual: " <br/>=<br/> ",
			tfFalse: "False",
			tfTrue: "True"
		}
	};
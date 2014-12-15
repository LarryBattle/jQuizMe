/*
Programmer: Pascal VERRIER (pverrier)
Date: Nov 14, 2014
Purpose: French translation jQuizMe language object.
The variable SHORT-LANGUAGE-CODE_Lang is the object template.
The variable default_Langauge is jQuizMe default language object.
More information here: http://code.google.com/p/jquizme/wiki/Translations
*/

var frLang = {
  ans:{
    corrAns: "La bonne réponse est :",
    praise: "Excellent !",
    whyAns: "Explication :",
    yourAns: "Vous avez répondu :"
  },
  btn:{   
    // [ "text", "title" ],
    // The button will display the text, and show the title when the user hover over the button.
    // The "title" is not required.
    begin: [ "Commencer" ],
    check: [ "Valider", "Valider la réponse" ],
    del: [ "Effacer", "Effacer les réponses" ],
    help: ["Aide", "Cliquez pour obtenir de l'aide"],
    next: [ "Suivant", "Question suivante" ],
    restart: [ "Recommencer", "Refaire le quiz" ],
    details: [ "Score", "Voir le score" ],
    review: [ "Revoir les réponses", "Revoir les réponses" ],
    showOnlyMissed: [ " * Mauvaises réponses", "N'afficher que les mauvaises réponses." ],
    quit: [ "Quitter", "Quitter le quiz" ],
    quitYes: [ "Oui, quitter", "Quitter le quiz" ],
    quitNo: [ "Retour", "Retour au quiz" ]
  },
  err:{
    badQType: "Type de quiz invalide.",
    badKey: " est une valeur de clé non valide.",
    error: "Erreur",
    noQType: "Aucun type de quiz.",
    noQues: "Le quiz n'a aucune question.",
    notArr: "Doit être un tableau.",
    notObj: "La structure de données du quiz est invalide. Tableau ou objet attendu."
  },
  stats:{
    right: "Exact",
    rate: "Taux de réussite",
    score: "Score",
    wrong: "Faux",
    total: "Total",
    tried: "Essai"
  },
  quiz:{
    tfEqual: " = ",
    tfEnd : "&nbsp;?",
    tfFalse: "Faux",
    tfTrue: "Vrai"
  }
};

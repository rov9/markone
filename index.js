
var c = require("readline-sync");

console.log("Hello! Welcome to my game!");

//input
var player = c.question("Please enter your name: ");

// processing 
var welcomeMessage = `Hey! ${player} good to have you here!`;

// output
console.log(welcomeMessage);



var score = 0;

function gameplay(question, correctAnswer) {
  var isAnswerCorrect; 

  var answer = c.question(question);

  if (answer.toUpperCase() === correctAnswer.toUpperCase()) {
    isAnswerCorrect = true;
    score = score + 1;
  } else {
    isAnswerCorrect = false;
    score = score - 1;
  }

  return isAnswerCorrect;
}



const questionList = [
  {
    question: "Where do I work?",answer: "tcs"
  },
  {
    question: "Who's my favorite superhero?",
    answer: "Shaktiman"
  },
{
    question: "What is my favourite dish?",
    answer: "Indian"
  }

];

var i = 0; 

while (i < questionList.length) {
 
  var isCorrect = gameplay(questionList[i].question, questionList[i].answer);

  console.log("is your answer correct?", isCorrect);
  console.log("your score is: ", score);
  i++;  
}

//top scores

var topScores = [
  { name: "Saurabh", score: 3 },
  { name: "Sameera", score: 3 },
  { name: "Saptarshi", score: 2 }
];

console.log("These are the top scores, if you have more than these, please send me a screenshot!!")

for (var i = 0; i < topScores.length; i++) {
  console.log(`${topScores[i].name} ::: ${topScores[i].score}`);
}

const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
let score = 0;
const pointsPerQuestion = 10;
let tries = 3;
const numberOfQuestions = 20;
const { questions } = require('./data');


function triviaQuestion (index) {
    console.log(`\n${questions[index].question}`);

   console.log(questions[index].choices);

const answer = prompt(`enter A, B, C, or D: `);

if (answer.toUpperCase() === questions[index].answer) {
    console.log('Correct!');
    score += pointsPerQuestion;
    console.log(`Your score is: ${score}`);
}

 else {
    tries -= 1;
    console.log(`Wrong! The correct answer is ${questions[index].answer}`);
    console.log(`You have ${tries} tries left.`);
 
   
}
}

for (let i = 0; i < numberOfQuestions; i++) {
    triviaQuestion(i);



 if (tries === 0) {
        console.log('Game over!');
        return;
 }
    }
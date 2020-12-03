const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerObject = {
  q1: "a",
  q2: "b",
  q3: "c",
  q4: "d",
  q5: "e",
  q6: "f",
  q7: "g",
  q8: "h"
}

rl.question('What do you think of Node.js? ', (answer) => {
  //console.log(`Thank you for your valuable feedback: ${answer}`)
  answerObject.q1 = answer;

  rl.question('What\'s your name ? ', (answer) => {
    //console.log(`My name is ${answer}.`);
    answerObject.q2 = answer;

    rl.question('What\'s an activity you like doing? ', (answer) => {
      //console.log(`${answer} is my favourite activity.`);
      answerObject.q3 = answer

      rl.question('What do you listen to while doing that? ', (answer) => {
        //console.log(`I mostly listen to ${answer}.`);
        answerObject.q4 = answer

        rl.question('Which meal is your favourite? ', (answer) => {
          // console.log(`My favourite meal is ${answer}.`);
          answerObject.q5 = answer

          rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
            // console.log(`My favourite thing to eat for that meal is ${answer}.`);
            answerObject.q6= answer

            rl.question('Which sport is your absolute favourite? ', (answer) => {
              // console.log(`My favourite sport is ${answer}.`);
              answerObject.q7 = answer

              rl.question('What is your superpower? ', (answer) => {
                // console.log(`My superpower is ${answer}.`);
                answerObject.q8 = answer
    
    rl.close();

    console.log(`Thank you for your valuable feedback: ${answerObject.q1}. My name is ${answerObject.q2}. ${answerObject.q3} is my favourite activity. I mostly listen to ${answerObject.q4}. My favourite meal is ${answerObject.q5}. My favourite thing to eat for that meal is ${answerObject.q6}. My favourite sport is ${ answerObject.q7}. My superpower is ${answerObject.q8}.`);
    
              });
            });
          });
        });
      });
    });
  });
});
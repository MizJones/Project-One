document.addEventListener("DOMContentLoaded", function() {
console.log('DOM in da house!')

//startBtn.addEventListener('click', startGame);
submitBtn.addEventListener("click", submitAnswer);
// previousBtn.addEventListener("click", showPreviousSlide);
nextBtn.addEventListener("click", showNextSlide);
resultsBtn.addEventListener("click", resultsCheck);
});

var questionsArray = [{question: 'You have an opportunity to sign a niche guy, very successful in indie circles. He’s pretty low maintenance, you figure, and he is a tremendous songwriter. What do you do?', 
answers: ['Sign him but never return his calls.', 'Give him a songwriting contract.', 'Lowball him and change him', 'Change nothing.'], 
correctAnswer: 3
},
{question: 'Your guy has had some pretty good gigs and he has been on a few national and international tours. His alt-kid attitude is a problem now that you are working with him, and he is more interested in staying anonymous than working his press junkets. What direct-order-veiled-as-advice do you offer him?',     
answers: ['Tell him to spend less time scowling.', 'No Advice because kids love rebels.', 'Find a pop star girlfriend for him.', 'Stop returning his calls.'], 
correctAnswer: 1
}, 
{question: 'These days, your guy is a Pretty Big Deal, and looking for ways to disrupt his own fame. He wants to stay true to his art like every other act does after they start getting paid (and you start recouping your investments). He wants to change his image and sound, and you know will tick off his fans. What do you do?', 
answers: ['Tell him to stick with what he is doing.', 'Nothing. It is all just talk.', 'Bring back the bubble gum pop star.', 'Get the PR machine ready. This will be big.'], 
correctAnswer: 3
}, 
{question: 'Welp, now your artist has done it. He put his New Vibe into the world and it went badly. Afterward he went off in the mountains to nurse his ego and was injured in a motorcycle accident. Now he says he is taking a few years off because The Industry is polluting his soul. The time off is in violation of his contract. What do you do?', 
answers: ['Tell him his next tour starts in a month.', 'Fire him. Now.', 'Give him room and let him rebuild his swagger. He will be back someday.', 'What artist in the hospital?'], 
correctAnswer: 2
},
{question: 'One of your acts had a successful debut and is heading back to the studio to record their sophomore effort. The first record made huge money. A band member says he is the only person who can capture the group’s ESSENCE. What do you do?',
answers: ['Give him free rein. He has talent and the band is like a family.', 'Find a producer with experience. It will be less personal but cheaper', 'Say yes, and keep tabs on every decision.', 'Assign a co producer.'],
correctAnswer: 1
 },

{question: 'The superstars have gone into the studio but nothing much is materializing. The band says the studio is blocking their creative energy. When you ask how you can help, seeing costs and timelines skyrocketing, the producer tells you the band needs $1.5 million to renovate the studio. That’s a drop in the bucket compared to revenue from their debut album. How do you handle the request?',
answers: ['Give them that and more because the first record was so amazing.', 'Stop paying their cocaine budget but honor the request.', 'Go with the flow and give them anything they need.', 'Scrap the project and cut your losses but keep them on your roster.'],
correctAnswer: 3
},
{question: "It’s been months and now things are really getting wacky. It seems like every member of group, a band chock full of couples and collisions, has an alternating at best, but more likely random, list of members they will and will not talk to and/or canoodle. Their lists change on a dime, and they all seem to be spending their time creating lyrics about other band members faster than the music can be written to go with the music. They are becoming a joke, so what action can you take?",
answers: ['Stop paying the coke dealer (again).', 'Put the boys and the girls in separate bedrooms since that’s where their orientations are directed', 'Send them all to therapy. There is too much money at stake now.', 'All of the above'],
correctAnswer: 3
},
{question: "After millions and millions of dollars, horrible PR leading up to release about band members behaving badly and many blown deadlines, the album is released. And it’s terrible. The record is considered one of the most expensive record failures in the history of, well, records.  Critics and fans hate it. What is your next move?",
answers: ['Send them on the county-fair-and-casino tour circuit to set them straight', 'Stick a fork in them. They are done and you are broke.', 'Let them amble around and see how things sort. Maybe someday you will recoup your investment.', 'Get them back into the studio and rule with an iron fist. They will thank you later.'],
correctAnswer: 2
},
{question: 'You have to make a decision.  you have a direct line on an incredibly talented female-fronted group with an old-school jazz vibe playing a cafe show in (gulp) New Jersey. Club manager contacts have been telling you about an alt band fronted by an ex-playboy bunny playing here in town. Both acts have been kicking around for a couple of years, but haven’t caught on, and you cannot go to both. Which do you choose?',
answers: ['Neither. Who needs another female act?', 'Go to Jersey. A jazz revival can happen at any time with the right talent.', 'Playboy bunny and not in Jersey. It’s a winner.', 'Intend to do both, and have too many scotches instead.'],
correctAnswer: 2
},
{question: 'You signed the band, but wow are they a pain. They are more dedicated to the idea of music more than making it, and the lead singer in particular, has become super “arty” on you. You have to keep them on your roster. Do you spend more time with them and try to develop their options?',
answers: ['Tie them down and force production.', 'Make things go faster by demanding no ad-libbed recording time.', 'Who cares? They aren’t in a popular niche, and they aren’t going to create a new one.', 'Give them room and get some more scotch.'],
correctAnswer: 3
},
{question: 'Things are better, and the band is cutting through. But the lead singer (yeah, her again) wants to collaborate unknowns hiphop and club people. None of them signed with major labels. The band looks like it might break up if you don’t get involved. What do you do?',
answers: ['Get the lead singer to a convent.', 'Let it go and see if the band can give the lead singer room to do her thing knowing you’ll lose money', 'Keep the lead singer as a solo act and cut out the band - and their expenses. She is the draw. Not the band.', 'Hire a handler to keep everyone in line in a friendly way.'],
correctAnswer: 1
},
{question: 'After many years, your lead singer comes back around saying she wants to work more (because no one ever stops working in the music biz. They just take decade long naps). You were just about to take a rest yourself with the money you earned from her over the years. What do you tell her?',
answers: ['I think you are too old. You are in your 50s, right?', 'Line up some dates that never materialize', 'Get some documentary folks to talk with her because it turns out she WAS the scene rather than just part of it.', 'Hire a handler to... nevermind, she can handle herself.'],
correctAnswer: 3
}
];

var n = 0;
var cAnswers = [];
var pAnswers = [];
var aAnswers = ['3', '1', '3','2']; 
// add arrays for sections [1332] [2313]
var cAns 
// = question.correctAnswer;


// function showPreviousSlide() {
// var p  = n-2;
// var container = document.getElementById('displayQuestionDiv');   
// var question = questionsArray[p];
//     html = '<h1 id="qText">' + question.question + '</h1><br><br>';
//      for (var j = 0; j < question.answers.length; ++j) {
//         html += '<input type="radio" id="' + j + '" name="radioChoice">' + question.answers[j] + '<br>';
//     }
//     container.innerHTML = html;
//     n = n-1;
    // var cAns = question.correctAnswer;
    // console.log('cAns is ' + cAns);
    //cAnswers.pop(cAns);
    // console.log('cAnswers.length is ' + cAnswers.length);

//function startGame() {
    //var sBtn = document.getElementById("startDiv");

    //startBtn.style.display = "block";
    //startDiv.style.display = "block";
    //quizButton.style.display = "none";
    //displayQuestionDiv.style.display = "none";
//}


function showNextSlide() {
var container = document.getElementById('displayQuestionDiv');
    var question = questionsArray[n],
    html;     
    html = '<h1>' + question.question + '</h1><br><br>';
     for (var j = 0; j < question.answers.length; ++j) {
        html += '<input type="radio" class="radio" id="' + j + '" name="' + j + '">' + question.answers[j] + '<br>';
// console.log(j);
    }
    container.innerHTML = html;
    n = n+1;
     var cAns = question.correctAnswer;
     console.log('cAns is ' + cAns);
     cAnswers.push(cAns); 
     console.log(cAnswers);

} 

function submitAnswer() {
var selectedRadio = document.getElementsByClassName('radio');
var pAns;
console.log(selectedRadio.length);
for(var i = 0; i < selectedRadio.length; i++){
    if(selectedRadio[i].checked){
        pAns = selectedRadio[i].name;
        console.log('pChoice is ' + pAns);
        pAnswers.push(pAns)
        console.log('pAnswers is ' + pAnswers);
        // cAns = question.correctAnswer;
        // console.log('cAns is ' + cAns);
        // cAnswers.push(cAns); 
        console.log('cAnswers is ' + cAnswers);
        console.log('in resultsCheck');
        if (JSON.stringify(aAnswers) === JSON.stringify(pAnswers)) {
            console.log('They are equal!');
        }
        else {
            console.log('they are NOT equal!');
        var x = document.getElementById("myDIV");
    // if (aAnswers.length = 12) {
    //     nextBtn.style.display = "block";
    //     submitBtn.style.display = "block";

    // } 

    // else {
    //     resultsBtn.style.display = "block";
    // }
    //     }
    }
  }
}

function resultsCheck() {
    
  console.log('in resultsCheck');
   if (JSON.stringify(aAnswers) === JSON.stringify(pAnswers)) {
     console.log('They are equal!');
   }
  else {
    console.log('they are NOT equal!');
  }
}
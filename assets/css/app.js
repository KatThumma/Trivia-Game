$('#start').on('click', function(){
    $('#start').remove();
})

var questions = [{
    question: "What was the name of Gonzos chicken girlfriend?",
    answers: ["Camilla", "Suzette", "Colette", "Fifi"],
    correctAnswer: "Camilla",
    image: "assets/images/Kermit.gif"
}, {
    question: "What was the name of Dr.Bunsen Honeydew's assistant?",
    answers: ["Fred", "Fozzie", "Beeker", "Scooter"],
    correctAnswer: "Beeker",
    image: "assets/images/Beeker.gif"
}, {
    question: "Mahna Mahna?",
    answers: ["Do Do Do Do Do", "Do Do Do Do", "Duh-Do-Do Duh-Do-Do", "Duh-Do-Do-Do-Do-Do"],
    correctAnswer: "Do Do Do Do Do",
    image: "assets/images/mahna.gif"
}];

var game = {
    questions: questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    countdown: function(){

    },
    loadQuestion: function(){

    },
    nextQuestion: function(){

    },
    timeUp: function(){

    },
    results: function(){

    },
    clicked: function(){

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){

    },


}
$('#start').on('click', function(){
    $('#start').remove();
    game.loadQuestion();
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
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("time up!");
            game.timeUp();
        }
    },
    loadQuestion: function(){
        time = setInterval(game.countdown,1000);
        $('#subwrapper').html('<h2>'+question[game.currentQuestion].question+'</h2>');
        for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class="answer-button"id="button-'+i+'" data-name="'+questions[game.currentQuestions].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }
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
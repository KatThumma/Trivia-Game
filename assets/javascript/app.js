// Add document ready function
$(document).ready(function() {
    // Add on-click function that removes Start button 
    $('#start').on('click', function() {
        $('#start').remove();
        game.loadQuestion();
    })

    // Add on-click function for answer button
    $(document).on('click', '.answer-button', function(e) {
        game.clicked(e);
    })

    // Add on-click function for Try Again? button
    $(document).on('click', '#reset', function() {
        game.reset();
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
        currentQuestion: 0,
        counter: 20,
        correct: 0,
        wrong: 0,
        unanswered: 0,
        countdown: function() {
            game.counter --; 
            $('#counter').html(game.counter);
            if(game.counter <= 0){
                game.timeUp();
            }
        },
        loadQuestion: function() {
            timer = setInterval(game.countdown, 1000);
            $('#subwrapper').html("<h3>Time Remaining: <span id='counter'>20</span> seconds</h3>");
            $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
            for(var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $('#subwrapper').append('<button class="answer-button" id="button-'+ i +' " data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
            }
        },
        nextQuestion: function() {
            game.counter = 20;
            $('#counter').html(game.counter);
            game.currentQuestion ++;
            game.loadQuestion();
        },
        timeUp: function() {
            clearInterval(timer);
            game.unanswered ++;
            $('#subwrapper').html('<h2>Unsure? </h2>');
            $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
            $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
            if(game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3*1000);
            } else {
                setTimeout(game.nextQuestion, 3*1000);
            }
        },
        results: function () {
            clearInterval(timer);
            $('#subwrapper').html("<h2>Quiz Complete!</h2><br><h3>Wakka Wakka!</h3>");
            $('#subwrapper').append("<h4>Correct: " + game.correct + "</h4>");
            $('#subwrapper').append("<h4>Incorrect: " + game.wrong + "</h4>");
            $('#subwrapper').append("<h4>Unanswered: " + game.unanswered + "</h4>");
            $('#subwrapper').append("<button id='reset'>Try Again?</button>");
            $('#subwrapper').append("<h5>If at first you dont succeed, try try again!</h5>");
        },
        clicked: function (e) {
            clearInterval(timer);
            if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                game.answeredCorrectly();
            } else {
                game.answeredWrong();
            }
        },
        answeredCorrectly: function () {
            clearInterval(timer);
            game.correct ++; 
            $('#subwrapper').html('<h2>YYYAAAAAAYYYY!!!!</h2>');
            $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
            if(game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 4*1000);
            } else {
                setTimeout(game.nextQuestion, 4*1000);
            }
        },
        answeredWrong: function () {
            clearInterval(timer);
            game.wrong ++;
            $('#subwrapper').html('<h2>Questions questions!</h2>');
            $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
            $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
            if(game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 4*1000);
            } else {
                setTimeout(game.nextQuestion, 4*1000);
            }
        },
        reset: function() {
            game.currentQuestion = 0;
            game.counter = 20;
            game.correct = 0;
            game.wrong = 0;
            game.unanswered = 0;
            game.loadQuestion();

        }
    }
});
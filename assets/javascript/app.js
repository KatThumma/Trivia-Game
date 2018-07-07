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

    // Create an array of multiple-choice questions with associated images
   
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

    // Create Game Object including all game properties and methods
    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: 20,
        correct: 0,
        wrong: 0,
        unanswered: 0,
        countdown: function() {
            // Decrement counter
            game.counter --; 
            // Display counter
            $('#counter').html(game.counter);
            // When time runs out, run the timeUp method
            if(game.counter <= 0){
                game.timeUp();
            }
        },
        // Create method to load question to the page
        loadQuestion: function() {
            // Create timer - this sets countdown to decrement every second
            timer = setInterval(game.countdown, 1000);
            // Display timer
            $('#subwrapper').html("<h3>Time Remaining: <span id='counter'>20</span> seconds</h3>");
            // Display current questions
            $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
            // Loop through array of possible answers
            for(var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                // Create a button for each answer 
                $('#subwrapper').append('<button class="answer-button" id="button-'+ i +' " data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
            }
        },
        nextQuestion: function() {
            // Reset timer
            game.counter = 20;
            // Reset display timer
            $('#counter').html(game.counter);
            // Increment current question "counter" and load next question
            game.currentQuestion ++;
            game.loadQuestion();
        },
        timeUp: function() {
            // Stop timer
            clearInterval(timer);
            // Incremenet unanswered counter
            game.unanswered ++;
            // Display message that they have run out of time
            $('#subwrapper').html('<h2>Unsure? </h2>');
            // Display correct answer
            $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
            // Display gif
            $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
            // If this is the last question, take the user to the results screen after 3 seconds
            if(game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 3*1000);
            // If this is not the last question, load the next question after 3 seconds
            } else {
                setTimeout(game.nextQuestion, 3*1000);
            }
        },
        results: function () {
            // Stop timer
            clearInterval(timer);
            $('#subwrapper').html("<h2>Quiz Complete!</h2><br><h3>Wakka Wakka!</h3>");
            $('#subwrapper').append("<h4>Correct: " + game.correct + "</h4>");
            $('#subwrapper').append("<h4>Incorrect: " + game.wrong + "</h4>");
            $('#subwrapper').append("<h4>Unanswered: " + game.unanswered + "</h4>");
            $('#subwrapper').append("<button id='reset'>Try Again?</button>");
            $('#subwrapper').append("<h5>If at first you dont succeed, try try again!</h5>");
        },
        clicked: function (e) {
            // Stop timer
            clearInterval(timer);
            // If the answer is correct, run the answeredCorrectly method
            if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                game.answeredCorrectly();
            // If the answer is wrong, run the answeredWrong method
            } else {
                game.answeredWrong();
            }
        },
        answeredCorrectly: function () {
            // Stop timer
            clearInterval(timer);
            // Increment correct answer counter
            game.correct ++;
            // Display header 
            $('#subwrapper').html('<h2>YYYAAAAAAYYYY!!!!</h2>');
            // Display gif
            $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
            // If this is the last question, take the user to the results screen after 3 seconds
            if(game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 4*1000);
            // If this is not the last question, load the next question after 3 seconds
            } else {
                setTimeout(game.nextQuestion, 4*1000);
            }
        },
        answeredWrong: function () {
            // Stop timer and reset
            clearInterval(timer);
            // Increment wrong answer counter
            game.wrong ++;
            // Display header 
            $('#subwrapper').html('<h2>Questions questions!</h2>');
            // Display correct answer
            $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
            // Display gif
            $('#subwrapper').append('<img src = "'+ questions[game.currentQuestion].image +'">');
            // If this is the last question, take the user to the results screen after 3 seconds
            if(game.currentQuestion == questions.length - 1) {
                setTimeout(game.results, 4*1000);
            // If this is not the last question, load the next question after 3 seconds
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
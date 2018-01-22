let score = 0;
// let scorebox = document.getElementById("score");
// let questionbox = document.getElementById("question");
// let answerform = document.getElementById("myForm");

function setAdditionGame() {
    $("#myForm").attr("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    $("#myForm").attr("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    $("#myForm").attr("data-gametype", "multiplication");
    multiplicationQuiz();
}


function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    $("#question").text("What is: " + num1 + " + " + num2 + "?");
    $("[name=rightAnswer]").val(num1 + num2);
}


function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num2 > num1){
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    $("#question").text("What is: " + num1 + " - " + num2 + "?");
    $("[name=rightAnswer]").val(num1 - num2);
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    $("#question").text("What is: " + num1 + " * " + num2 + "?");
    $("[name=rightAnswer]").val(num1 * num2);
}


function checkAnswer() {
    let gametype = $("#myForm").attr("data-gametype");
    if ($("[name=answer]").val() == $("[name=rightAnswer]").val()) {
        $("body").append("<div class='message'><h1>Yay! You got it right!</h1><div>");
        $(".message").css("background-color", "green");
        $(".message").fadeIn(1000);
        $(".message").fadeOut(1000);
        $(".message").remove();
        score++;
    } else {
        alert("Oh, sorry! You got it wrong :(");
        score--;
    }
    $("[name=answer]").val("");
    $("#score").text("your answer is: " + score);
    if (gametype == "addition") {
        additionQuiz();
    }
    if (gametype == "subtraction") {
        subtractionQuiz();
    }
    if (gametype == "multiplication") {
        multiplicationQuiz();
    }
}


additionQuiz();
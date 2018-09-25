let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");
let playerNameForm = document.getElementById("playername");
let startMessage = document.getElementById("startmessage");
let mathStart = document.getElementById("mathstart");
let playerName;


function setAdditionGame() {
    answerform.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    answerform.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerform.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function setDivisionGame() {
    answerform.setAttribute("data-gametype", "division");
    divisionQuiz();
}


function checkAnswer() {
    let gametype = answerform.getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        document.getElementById("message").innerHTML = "Hey! You got it right :)";
        score++;
    }
    else {
        document.getElementById("message").innerHTML = "Awww...wrong this time";
    }
    answerform["answer"].value = "";
    scorebox.textContent = score;
    if (gametype == "addition") {
        additionQuiz();
    }
    else if (gametype == "subtraction") {
        subtractionQuiz();
    }
    else if (gametype == "multiplication") {
        multiplicationQuiz();
    }
    else if (gametype == "division") {
        divisionQuiz();
    }
    return false;
}

function additionQuiz() {
    math_Start()
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2);
}

function subtractionQuiz() {
    math_Start()
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num1 > num2) {
        questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
        answerform["rightAnswer"].value = (num1 - num2);
    }
    else {
        subtractionQuiz()
    }

}
    function multiplicationQuiz() {
        math_Start();
        let num1 = Math.floor(Math.random() * 50);
        let num2 = Math.floor(Math.random() * 50);
        questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
        answerform["rightAnswer"].value = (num1 * num2);
    }

    function divisionQuiz() {
        math_Start();
        let num1 = Math.floor(Math.random() * 500);
        let num2 = Math.floor(Math.random() * 150);
        if (num1 > num2 && num1 % num2 == 0) {
            questionbox.textContent = "What is: " + num1 + " / " + num2 + "?";
            answerform["rightAnswer"].value = (num1 / num2);
        }
        else {
            divisionQuiz()

        }
    }

        function start_Message() {
            startMessage.style.display = "block";
            mathStart.style.display = "none";
        }

        function math_Start() {
            startMessage.style.display = "none";
            mathStart.style.display = "block";
        }

        function setPlayerName() {
            playerName = playerNameForm["playerName"].value;
            document.getElementById("p_name").textContent = playerName;
            playerNameForm["playerName"].value = "";
            math_Start();
            return false;
        }

        start_Message()

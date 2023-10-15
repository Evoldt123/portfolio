// Utilities

function rndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Load Funcitonality

var yoyo = "TESTING";

var question_one_A = rndInteger(1, 10);
var question_one_B = rndInteger(1, 10);
var question_one_ans = question_one_A + question_one_B;

// Events

function onPageLoad() {
    var equation_q1_a = `\\(${question_one_A}+${question_one_B}\\)`;
    document.getElementById("question_one").innerHTML = `What is ${equation_q1_a} ?`
    document.getElementById("spoiler1").innerHTML = `${equation_q1_a} is ${question_one_A+question_one_B}`;
}

function spoilerToggle(spoilerID) {
    if (document.getElementById(spoilerID).style.display === 'none') {
        document.getElementById(spoilerID).style.display = '';
    }
    else {
        document.getElementById(spoilerID).style.display = 'none';
    }
}

function answerSubmit(event) {
    event.preventDefault();

    var num1 = parseInt(document.getElementById("first-text").value);
    
    if (num1 === question_one_ans) {
        document.getElementById("thing").innerHTML = "Correct";
    }
    else {
        document.getElementById("thing").innerHTML = "Incorrect";
    }
    
    if (document.getElementById("spoiler_button_1").style.display = 'none') {
        document.getElementById("spoiler_button_1").style.display = '';
    }
}
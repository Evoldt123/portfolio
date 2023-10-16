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
    var equation_q1_a = `\\(${question_one_A} \\, \\mathrm{m/s} +${question_one_B} \\, \\mathrm{m/s} \\)`;
    document.getElementById("question_one").innerHTML = `What is ${equation_q1_a} ?`
    document.getElementById("spoiler1").innerHTML = `${equation_q1_a} is \\(${question_one_A+question_one_B} \\, \\mathrm{m/s} \\)`;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

function spoilerToggle(spoilerID) {
    if (document.getElementById(spoilerID).style.display === 'none') {
        document.getElementById(spoilerID).style.display = '';
    }
    else {
        document.getElementById(spoilerID).style.display = 'none';
    }
}

function singleQuestionAnswerSubmit(event, input_box, answer, correct_display, spoiler) {
    event.preventDefault();

    var inputAns = parseInt(document.getElementById(input_box).value);
    
    if (inputAns === answer) {
        document.getElementById(correct_display).innerHTML = "Correct";
        document.getElementById(correct_display).style.backgroundColor = "springgreen";
    }
    else {
        document.getElementById(correct_display).innerHTML = "Incorrect";
        document.getElementById(correct_display).style.backgroundColor = "lightcoral";
    }
    
    if (document.getElementById(spoiler).style.display = 'none') {
        document.getElementById(spoiler).style.display = '';
    }
}
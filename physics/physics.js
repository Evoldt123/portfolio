// Utilities

function rndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndFloat(min, max, multiple, sigfigs) {
    let num = (Math.random() * (max - min + 1) + min) * (multiple*10);
    return num.toPrecision(sigfigs);
}

var question_one_A = rndInteger(1, 10);
var question_one_B = rndInteger(1, 10);
var question_one_ans = question_one_A + question_one_B;

var u1_q2_text = "To be or not to be, that is the question. \\( 69? \\)";
var u1_question_two_ans = 5;

var u2_q1_text = rndFloat(1, 100, 3, 5);
var u2_question_one_ans = 20390;

// Events

function onPageLoad() {
    var equation_q1_a = `\\(${question_one_A} \\, \\mathrm{m/s} +${question_one_B} \\, \\mathrm{m/s} \\)`;
    document.getElementById("question_one").innerHTML = `What is ${equation_q1_a} ?`;
    document.getElementById("spoiler1").innerHTML = `${equation_q1_a} is \\(${question_one_A+question_one_B} \\, \\mathrm{m/s} \\)`;

    document.getElementById("u1_question_two").innerHTML = u1_q2_text;

    document.getElementById("u2_question_one").innerHTML = u2_q1_text;

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

function singleQuestionAnswerSubmit(input_box, unit_box, answers, correct_display, spoiler, event='') {
    event.preventDefault();
    var forms = document.querySelectorAll('form');
    var formData = new FormData(document.querySelector('form'));

    var inputAns = parseInt(document.getElementById(input_box).value);
    var unitAns = document.getElementById(unit_box).value;
    if (inputAns === answers[0] && unitAns === answers[1]) {
        document.getElementById(correct_display).innerHTML = "Correct";
        document.getElementById(correct_display).style.backgroundColor = "springgreen";
    }
    else if (inputAns === answers[0]) {
        document.getElementById(correct_display).innerHTML = "Incorrect Units";
        document.getElementById(correct_display).style.backgroundColor = "orange";
    }
    else {
        document.getElementById(correct_display).innerHTML = "Incorrect";
        document.getElementById(correct_display).style.backgroundColor = "lightcoral";
    }
    
    if (document.getElementById(spoiler).style.display = 'none') {
        document.getElementById(spoiler).style.display = '';
    }
}
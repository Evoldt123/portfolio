// Utilities

function rndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndFloat(min, max, sigfigs) {
    let num = (Math.random() * (max - min + 1) + min);
    return num.toPrecision(sigfigs);
}

var question_one_A = rndInteger(1, 10);
var question_one_B = rndInteger(1, 10);
var question_one_ans = question_one_A + question_one_B;

var u1_q2_text = "To be or not to be, that is the question. \\( 69? \\)";
var u1_question_two_ans = 5;
// weio
var u2_q1_mass = rndFloat(10, 100, 2);
var u2_q1_force = rndFloat(100, 150, 3);
var u2_q1_theta = rndInteger(10, 50);
var u2_q1_displacement = rndFloat(10, 30, 3);

var u2_q1_text = `Kaden Ingrao is mowin his lawn using his \\( ${u2_q1_mass} \\, \\mathrm{kg} \\) 
mower using an applied force of \\( ${u2_q1_force} \\, \\mathrm{N} \\) directed \\( ${u2_q1_theta}^\\circ \\)
below the horizontal. What is the work Mr. Ingrao puts in if he goes \\( ${u2_q1_displacement} \\, \\mathrm{m} \\)?`;
var u2_question_one_ans_big = Math.cos(u2_q1_theta * Math.PI / 180)*u2_q1_force*u2_q1_displacement;
var u2_question_one_ans = parseFloat(u2_question_one_ans_big.toPrecision(2));
// Events

function onPageLoad() {
    var equation_q1_a = `\\(${question_one_A} \\, \\mathrm{m/s} +${question_one_B} \\, \\mathrm{m/s} \\)`;

    document.getElementById("question_one").innerHTML = `What is ${equation_q1_a} ?`;
    document.getElementById("spoiler1").innerHTML = `
    ${equation_q1_a} is \\(${question_one_A+question_one_B} \\, \\mathrm{m/s} \\)`;

    document.getElementById("u1_question_two").innerHTML = u1_q2_text;

    document.getElementById("u2_question_one").innerHTML = u2_q1_text;
    document.getElementById("u2_spoiler1").innerHTML = `The answer is \\( ${u2_question_one_ans_big} \\, \\mathrm{J} \\) 
    or \\( ${u2_question_one_ans} \\, \\mathrm{J} \\) 
    \\( \\\\ \\\\ \\) 
    Due to the dot product rule: 
    \\( \\\\ \\) 
    \\( W = |F| \\, |\\Delta d| \\, \\cos(\\theta) \\) 
    \\( \\\\ \\)
    \\( W = ${u2_q1_force} \\, \\mathrm{N} *${u2_q1_displacement} \\, \\mathrm{m} \\, *\\cos(${u2_q1_theta}^\\circ) \\)
    \\( \\\\ \\)
    \\( W = ${u2_question_one_ans_big}\\)`;
    
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
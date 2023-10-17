// Utilities

function rndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rndFloat(min, max, sigfigs) {
    let num = (Math.random() * (max - min + 1) + min);
    return num.toPrecision(sigfigs);
}

// _________________________________________ QUESTION DATA _______________________________________________

// test Q
var question_one_A = rndInteger(1, 10);
var question_one_B = rndInteger(1, 10);
var question_one_ans = question_one_A + question_one_B;


// u1_q2
var u1_q2_text = "I'm working on more recent units, the answer here is \\( 5 \\mathrm{m/s} \\)";
var u1_question_two_ans = 5;

// u2_q1
var u2_q1_mass = parseFloat(rndFloat(10, 100, 2));
var u2_q1_force = parseFloat(rndFloat(100, 150, 3));
var u2_q1_theta = parseFloat(rndInteger(10, 50));
var u2_q1_displacement = parseFloat(rndFloat(10, 30, 3));

var u2_question_one_ans_big = Math.cos(u2_q1_theta * Math.PI / 180)*u2_q1_force*u2_q1_displacement;
var u2_question_one_ans = parseFloat(u2_question_one_ans_big.toPrecision(2));

var u2_q1_text = `Kaden Ingrao is mowin his lawn using his \\( ${u2_q1_mass} \\, \\mathrm{kg} \\) 
mower using an applied force of \\( ${u2_q1_force} \\, \\mathrm{N} \\) directed \\( ${u2_q1_theta}^\\circ \\)
below the horizontal. What is the work Mr. Ingrao puts in if he goes \\( ${u2_q1_displacement} \\, \\mathrm{m} \\)?`;

var u2_q1_spoiler_content = 
`The answer is \\( ${u2_question_one_ans_big} \\, \\mathrm{J} \\) or \\( ${u2_question_one_ans} \\, \\mathrm{J} \\) 
\\( \\\\ \\\\ \\) 
Due to the dot product rule: 
\\( \\\\ \\) 
\\( W = |F| \\, |\\Delta d| \\, \\cos(\\theta) \\) 
\\( \\\\ \\)
\\( W = ${u2_q1_force} \\, \\mathrm{N} *${u2_q1_displacement} \\, \\mathrm{m} \\, *\\cos(${u2_q1_theta}^\\circ) \\)
\\( \\\\ \\)
\\( W = ${u2_question_one_ans_big}\\)`;


// u2_q2
var u2_q2_mass = parseFloat(rndFloat(60, 80, 3));
var u2_q2_displacement = parseFloat(rndFloat(10, 30, 3));
var u2_q2_theta = parseFloat(rndInteger(10, 50));

var u2_q2_force = u2_q2_mass*9.8
u2_q2_force = u2_q2_force.toPrecision(5)
var u2_q2_text = 
`A \\( ${u2_q2_mass} \\, \\mathrm{kg} \\) snowboarder is traveling down a hill. He travels \\( ${u2_q2_displacement} \\, \\mathrm{m} \\) .
The angle of inclination of the hill is \\( ${u2_q2_theta}^\\circ \\), what is the work that the gravity does?`;

var u2_question_two_ans_big = (u2_q2_mass*9.8)*(Math.cos((90-u2_q2_theta) * Math.PI / 180))*u2_q2_displacement;
var u2_question_two_ans = parseFloat(u2_question_two_ans_big.toPrecision(2));
var u2_q2_spoiler_content = 
`The answer is \\( ${u2_question_two_ans_big} \\, \\mathrm{J} \\) or \\( ${u2_question_two_ans} \\, \\mathrm{J} \\) 
\\( \\\\ \\\\ \\) 
Much like the previous question, we must use the dot product rule to equalize both gravity and the force going down the hill
\\( \\\\ \\) 
\\( W = |F| \\, |\\Delta d| \\, \\cos(\\theta) \\) 
\\( \\\\ \\) 
Since we are not given \\(F\\), \\( F_g = mg \\) 
\\( \\\\ \\) 
So \\(F_g = ${u2_q2_mass} \\, \\mathrm{kg}* 9.8 \\, m/s^2 = ${u2_q2_force} \\, N\\)
\\( \\\\ \\)
Then plug values in to get:
\\( \\\\ \\)
\\( W = ${u2_q2_force} \\, \\mathrm{N} *${u2_q2_displacement} \\, \\mathrm{m} \\, *\\cos(${90-u2_q2_theta}^\\circ) \\)
\\( \\\\ \\)
(Note that \\( \\theta = 90 - ${u2_q2_theta} \\) since the angle made between the downwards force and the applied force down the hill dont make up the given angle on its own.)`;

// Events

function onPageLoad() {
    var equation_q1_a = `\\(${question_one_A} \\, \\mathrm{m/s} +${question_one_B} \\, \\mathrm{m/s} \\)`;
    document.getElementById("question_one").innerHTML = `What is ${equation_q1_a} ?`;
    document.getElementById("spoiler1").innerHTML = `
    ${equation_q1_a} is \\(${question_one_A+question_one_B} \\, \\mathrm{m/s} \\)`;


    document.getElementById("u1_question_two").innerHTML = u1_q2_text;


    document.getElementById("u2_question_one").innerHTML = u2_q1_text;
    document.getElementById("u2_spoiler1").innerHTML = u2_q1_spoiler_content;
    

    document.getElementById("u2_question_two").innerHTML = u2_q2_text;
    document.getElementById("u2_spoiler2").innerHTML = u2_q2_spoiler_content;



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

    var inputAns = parseFloat(document.getElementById(input_box).value);
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
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

// u2_q3
var u2_question_three_ans = -1; 
while (u2_question_three_ans <= 10 || u2_question_three_ans >= 100) {
    var u2_q3_a = parseFloat(rndFloat(1, 4, 3));
    var u2_q3_b = parseFloat(rndFloat(0, 0, 2));
    var u2_q3_exp = parseFloat(rndFloat(0.01, 0.30, 2));
    var u2_q3_displacement = parseFloat(rndFloat(10, 30, 2));

    u2_q3_exp *= -1;
    u2_q3_b *= -1;
    u2_q3_exp = parseFloat(u2_q3_exp.toPrecision(2));
    u2_q3_b = parseFloat(u2_q3_b.toPrecision(2));

    var u2_question_three_ans_big = u2_q3_a/(u2_q3_exp+1) * Math.pow(u2_q3_displacement, u2_q3_exp+1) + u2_q3_b*u2_q3_displacement;
    var u2_question_three_ans = parseFloat(u2_question_three_ans_big.toPrecision(2));
}


if (u2_q3_exp == 0) {u2_q3_exp = 0.20;}
while (u2_q3_exp >= 1) {
    u2_q3_exp -= 0.1;
}

var u2_q3_text = `The function of a car's brakes can be expressed by the funtion: 
\\( \\\\ \\)
\\( F(d) = ${u2_q3_a}d ^{${u2_q3_exp}} - ${u2_q3_b*-1} \\)
\\( \\\\ \\)
What is the total work put in if the brakes are applied for \\( ${u2_q3_displacement} \\, \\mathrm{m} \\)?`;



var u2_q3_spoiler_content = `The answer is \\( ${u2_question_three_ans_big} \\, \\mathrm{J} \\) or \\( ${u2_question_three_ans} \\, \\mathrm{J} \\) 
\\( \\\\ \\\\ \\) 
This question is good practice for integration
\\( \\\\ \\)
If we imagine that the function is graphed, in order to find work we would need to find the area under the curve since we are working with a function of Force and displacement
\\( \\\\ \\)
We need to find the integral between 0 and ${u2_q3_displacement}
\\( W = \\int_0^{${u2_q3_displacement}} F(d)dd \\)
\\( \\\\ \\)
Reminder that to integrate, where:
\\( f(x) = ax^n \\)
\\( \\\\ \\)
\\( \\int f(x)dx = \\frac{ax^{n+1}}{n+1} + C\\)
\\( \\\\ \\)
or for this example, we'll reformat this to be
\\( \\int f(x)dx = \\frac{a}{n+1}x^{n+1} + C\\)
\\( \\\\ \\)
We integrate by subtracting both limits:
\\( \\\\ \\)
\\( \\int_0^{${u2_q3_displacement}} F(d)dd = [ \\frac{ ${u2_q3_a} }{ ${u2_q3_exp}+1 }d^{${u2_q3_exp}+1} + \\frac{ ${u2_q3_b} }{0+1}d^{0+1} + C]_0^{${u2_q3_displacement}} \\)
\\( \\\\ \\)
When calculating for the starting distance when \\( d = 0 \\), we find that `;

// Events

function onPageLoad() {
    var equation_q1_a = `\\(${question_one_A} \\, \\mathrm{m/s} +${question_one_B} \\, \\mathrm{m/s} \\)`;
    document.getElementById("question_one").innerHTML = `What is ${equation_q1_a} ?`;
    document.getElementById("spoiler1").innerHTML = `${equation_q1_a} is \\(${question_one_A+question_one_B} \\, \\mathrm{m/s} \\)`;


    document.getElementById("u1_question_two").innerHTML = u1_q2_text;

    document.getElementById("u2_question_one").innerHTML = u2_q1_text;
    document.getElementById("u2_spoiler1").innerHTML = u2_q1_spoiler_content;
    
    document.getElementById("u2_question_two").innerHTML = u2_q2_text;
    document.getElementById("u2_spoiler2").innerHTML = u2_q2_spoiler_content;

    document.getElementById("u2_question_three").innerHTML = u2_q3_text;
    document.getElementById("u2_spoiler3").innerHTML = u2_q3_spoiler_content;



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
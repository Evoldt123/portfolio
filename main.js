// Utilities

var cacheBustParameter = 'v=1.' + new Date().getTime();

var script = document.createElement('script');
script.src = 'script.js?' + cacheBustParameter;
document.head.appendChild(script);

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'styles.css?' + cacheBustParameter;
document.head.appendChild(link);

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
}

function iHavePolio(event) {
    event.preventDefault();

    var num1 = parseInt(document.getElementById("first-text").value);

    if (num1 === question_one_ans) {
        document.getElementById("thing").innerHTML = "Correct";
    }
    else {
        document.getElementById("thing").innerHTML = "Incorrect";
    }
    
        
}


function iHavePolio(event) {
    event.preventDefault();

    var text = 69;
    var polio = 0;
    var num1 = parseInt(document.getElementById("first-text").value);
    var num2 = parseInt(document.getElementById("second-text").value);
    polio = num1 + num2;
    document.getElementById("thing").innerHTML = polio;
    
}
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function show(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calcs() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
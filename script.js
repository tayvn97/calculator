var ans = 0;

function clearOutput(){
    document.getElementById("output").value=" ";
}

function sqrt(){
    var value = document.getElementById("output").value;
    value = Math.sqrt(value);
    document.getElementById("output").value = value;
}

function fordisplay(myvalue){
    document.getElementById("output").value += myvalue
}

function solve(){
    var equation = document.getElementById("output").value;
    var solved = eval(equation);
    document.getElementById("output").value = solved;
    ans = solved;
}

function del(){
    var x = document.getElementById("output").value;
    document.getElementById("output").value = x.substring(0, x.length - 1);
}
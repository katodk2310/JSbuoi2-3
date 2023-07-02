//nhap 2 ky so

function sumOfTwoChar() {
    var number = document.getElementById("number").value * 1;
    var ten = Math.floor(number / 10);
    var unit = number % 10;
    var sum = ten + unit;
    document.getElementById("result").innerHTML = `
        Result: ${ten} + ${unit} = ${sum}
    `
}
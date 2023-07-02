// tinh trung binh


function calAvg() {
    var first = document.getElementById("first").value * 1;
    var second = document.getElementById("second").value * 1;
    var third = document.getElementById("third").value * 1;
    var fourth = document.getElementById("fourth").value * 1;
    var fifth = document.getElementById("fifth").value * 1;
    var avg = (first + second + third + fourth + fifth) / 5;
    document.getElementById("result").textContent = "Kết quả: " + avg;
}

//dien tich va chu vi

function calculate() {
    var lengthValue = document.getElementById("length").value * 1;
    var widthValue = document.getElementById("width").value * 1;
    var perimeter = (lengthValue + widthValue) * 2
    var area = lengthValue * widthValue;
    document.getElementById("ketqua").innerHTML = `
        <p>Chu vi: ${perimeter}</p>
        <p>Diện tích: ${area}</p>
    `
}
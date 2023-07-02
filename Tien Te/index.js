//chuyen doi tien te

var doiTien = document.getElementById("result");
const BASE_Rate = 23500;
function transToVND() {
    var usdPrice = document.getElementById("usdCurrency").value * 1;
    var result = usdPrice * BASE_Rate;
    doiTien.textContent = "Tiền đã chuyển đổi: " + result.toLocaleString() + " VND";
}
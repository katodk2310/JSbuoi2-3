//tinh tien luong

var input = document.getElementById("workingDay");
var Result = document.getElementById("result");
const SALARY_PER_DAY = 100000;

function calSalary() {
    var workingDay = input.value * 1;
    var salary = SALARY_PER_DAY * workingDay;
    Result.textContent = 'Lương: ' + salary.toLocaleString();
}
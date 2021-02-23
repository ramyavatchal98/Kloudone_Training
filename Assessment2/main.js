var result= document.getElementById("submit");
result.addEventListener("onclick",Results);

var row = 1;

function Results() {
  var firstName = document.getElementById("Fname").value;
  var LastName= document.getElementById("Lname").value;
}

var display = document.getElementById("display");
var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);

cell1.innerHTML= firstname;
cell2.innerHTML = Lastname;

row++;

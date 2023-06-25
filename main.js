var weight, height, measure, bmi, error;

function calculate() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  error = "Please enter valid values";
  height /= 100;
  height *= height;
  bmi = weight / height;
  bmi = bmi.toFixed(1);

  if (bmi <= 18.4) {
    measure = "Your BMI is " + bmi + " which means you are Underweight";
    document.getElementById("results").className = "results-underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = "Your BMI is " + bmi + " which means you are Normal";
    document.getElementById("results").className = "results-normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = "Your BMI is " + bmi + " which means you are Overweight";
    document.getElementById("results").className = "results-overweight";
  } else if (bmi >= 30) {
    measure = "Your BMI is " + bmi + " which means you are Obese";
    document.getElementById("results").className = "results-obese";
  }

  if (weight === "" || weight === 0 || height === "" || height === 0) {
    document.getElementById("results").innerHTML = error;
  } else if (weight < 0 || height < 0) {
    document.getElementById("results").innerHTML = "Negative values not allowed";
  } else {
    document.getElementById("results").innerHTML = measure;
  }

  var table = document.getElementById("weightInfo");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var heightRange = row.cells[0].innerText;
    var weightRange = row.cells[1].innerText;

    if (isInRange(height, heightRange)) {
      row.classList.add("highlight");
    } else {
      row.classList.remove("highlight");
    }
  }
}

function isInRange(value, range) {
  var rangeValues = range.split(" - ");
  var min = parseInt(rangeValues[0]);
  var max = parseInt(rangeValues[1]);
  return value >= min && value <= max;
}

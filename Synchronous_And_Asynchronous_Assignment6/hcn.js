
function calculate(callback) {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

//   if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
//     alert("Vui lòng nhập số hợp lệ!");
//     return;
//   }

  const area = length * width;
  const perimeter = 2 * (length + width);

  callback(area, perimeter);
}

function displayResults(area, perimeter) {
  document.getElementById("area").innerText = "Diện tích: " + area;
  document.getElementById("perimeter").innerText = "Chu vi: " + perimeter;
}

// Gắn sự kiện click cho button
document.getElementById("calculateBtn").addEventListener("click", function() {
  calculate(displayResults);
});

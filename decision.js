function makeDecision() {
  const decision = document.getElementById("decision").value.trim();
  const optionA = document.getElementById("optionA").value.trim();
  const optionB = document.getElementById("optionB").value.trim();
  const priority = document.getElementById("priority").value;

  if (!decision || !optionA || !optionB) {
    alert("Please fill all fields before deciding.");
    return;
  }

  let recommendation = "";
  let reason = "";

  if (priority === "growth") {
    recommendation = optionB;
    reason = "This choice supports long-term growth.";
  } else if (priority === "peace") {
    recommendation = optionA;
    reason = "This option gives you more mental peace.";
  } else if (priority === "money") {
    recommendation = optionB;
    reason = "This decision improves financial stability.";
  } else {
    recommendation = optionA;
    reason = "This option gives better balance in life.";
  }

  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3>Suggested choice</h3>
    <p><strong>${recommendation}</strong></p>
    <p style="color:#9ca3af">${reason}</p>
  `;
}

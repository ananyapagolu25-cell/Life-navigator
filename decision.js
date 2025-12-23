function analyzeDecision() {
  const decision = document.getElementById("decision").value;
  const optionA = document.getElementById("optionA").value;
  const optionB = document.getElementById("optionB").value;
  const priority = document.getElementById("priority").value;
  const resultBox = document.getElementById("result");

  if (!decision || !optionA || !optionB) {
    resultBox.innerHTML = "Please fill all fields.";
    return;
  }

  let recommendation = "";
  let reason = "";

  if (priority === "growth") {
    recommendation = optionB;
    reason = "Growth usually requires stepping out of comfort.";
  } 
  else if (priority === "peace") {
    recommendation = optionA;
    reason = "Peace comes from stability and familiarity.";
  } 
  else if (priority === "money") {
    recommendation = optionB;
    reason = "New opportunities often bring better financial outcomes.";
  } 
  else {
    recommendation = optionA;
    reason = "Balance is easier when disruption is minimal.";
  }

  resultBox.innerHTML = `
    <h3>Recommended Choice</h3>
    <p><strong>${recommendation}</strong></p>
    <p class="reason">${reason}</p>
  `;
}

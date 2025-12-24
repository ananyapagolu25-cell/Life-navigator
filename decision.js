function makeDecision() {

  const decision = document.getElementById("decision").value.trim();
  const optionA = document.getElementById("optionA").value.trim();
  const optionB = document.getElementById("optionB").value.trim();
  const priority = document.getElementById("priority").value;
  const resultBox = document.getElementById("result");

  if (!decision || !optionA || !optionB) {
    alert("Please fill all fields.");
    return;
  }

  let recommendation = "";
  let reason = "";

  if (priority === "growth") {
    recommendation = optionB;
    reason = "Growth usually comes from change and new challenges.";
  } 
  else if (priority === "peace") {
    recommendation = optionA;
    reason = "Peace is often found in stability and familiarity.";
  } 
  else if (priority === "money") {
    recommendation = optionB;
    reason = "Money growth usually favors new opportunities.";
  } 
  else if (priority === "balance") {
    recommendation = optionA;
    reason = "Balance is easier when routines are predictable.";
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3>Recommendation</h3>
    <p><strong>Decision:</strong> ${decision}</p>
    <p><strong>Go with:</strong> ${recommendation}</p>
    <p>${reason}</p>
    <p style="margin-top:10px; color:#9ca3af;">
      Remember: this is guidance, not a command. Trust yourself too 🤍
    </p>
  `;
}

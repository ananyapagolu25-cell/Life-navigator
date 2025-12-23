function analyzeDecision() {
  const decision = document.getElementById("decision").value;
  const a = document.getElementById("optionA").value;
  const b = document.getElementById("optionB").value;

  if (!decision || !a || !b) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("result").innerText =
    "You are deciding: " + decision +
    "\nCompare both options calmly and choose what aligns with your long-term peace.";
}

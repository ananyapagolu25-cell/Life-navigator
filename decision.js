function analyzeDecision() {
  const decision = document.getElementById("decision").value.trim();
  const a = document.getElementById("optionA").value.trim();
  const b = document.getElementById("optionB").value.trim();

  if (!decision || !a || !b) {
    alert("Please fill all fields calmly.");
    return;
  }

  const thoughts = [
    "Choose the option that gives long-term peace, not short-term relief.",
    "Fear usually appears before growth.",
    "If both are scary, choose the one that helps you grow.",
    "Imagine yourself 1 year later — which regret hurts less?",
    "Your energy matters more than others’ opinions."
  ];

  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];

  const resultBox = document.getElementById("resultBox");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3>Reflection</h3>
    <p><strong>Your decision:</strong> ${decision}</p>
    <p><strong>Option A:</strong> ${a}</p>
    <p><strong>Option B:</strong> ${b}</p>
    <hr style="margin:15px 0;border-color:#1f2937">
    <p>${randomThought}</p>
  `;
}

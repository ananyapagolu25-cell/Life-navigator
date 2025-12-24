function makeDecision() {
    // Get user inputs
    const decision = document.getElementById("decision").value;
    const optionA = document.getElementById("optionA").value;
    const optionB = document.getElementById("optionB").value;

    // Validation
    if (decision === "" || optionA === "" || optionB === "") {
        alert("Please fill all fields before deciding.");
        return;
    }

    // Simple decision logic
    let result = "";

    if (optionA.length > optionB.length) {
        result = `Based on clarity, "${optionA}" seems better for your decision: "${decision}".`;
    } else if (optionB.length > optionA.length) {
        result = `Based on clarity, "${optionB}" seems better for your decision: "${decision}".`;
    } else {
        result = `Both options seem equally strong. Trust your gut feeling.`;
    }

    // Show result
    document.getElementById("result").innerText = result;
}

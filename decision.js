function makeDecision() {
    const decision = document.getElementById("decision").value;
    const optionA = document.getElementById("optionA").value;
    const optionB = document.getElementById("optionB").value;

    if (!decision || !optionA || !optionB) {
        alert("Please fill all fields");
        return;
    }

    const scoreA = Math.floor(Math.random() * 100);
    const scoreB = Math.floor(Math.random() * 100);

    let result = "";

    if (scoreA > scoreB) {
        result = `Go with "${optionA}". It aligns better with your situation.`;
    } else if (scoreB > scoreA) {
        result = `Choose "${optionB}". It feels like the stronger option.`;
    } else {
        result = `Both options are equal. Trust your gut.`;
    }

    document.getElementById("result").innerText = result;
}

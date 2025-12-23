function saveMood(mood) {
    let moods = JSON.parse(localStorage.getItem("moods")) || [];
    moods.push({ mood: mood, date: new Date().toLocaleString() });
    localStorage.setItem("moods", JSON.stringify(moods));
    alert("Mood saved successfully!");
}

function startBreathing() {
    const text = document.getElementById("breathing-text");
    let steps = ["Inhale...", "Hold...", "Exhale..."];
    let index = 0;

    text.innerText = steps[index];

    let interval = setInterval(() => {
        index++;
        if (index === steps.length) {
            clearInterval(interval);
            text.innerText = "Repeat if needed 🌿";
        } else {
            text.innerText = steps[index];
        }
    }, 3000);
}

function saveJournal() {
    let entry = document.getElementById("journal-input").value;

    if (entry.trim() === "") {
        alert("Please write something before saving.");
        return;
    }

    let journal = JSON.parse(localStorage.getItem("journal")) || [];
    journal.push({ entry: entry, date: new Date().toLocaleString() });
    localStorage.setItem("journal", JSON.stringify(journal));

    document.getElementById("journal-input").value = "";
    alert("Journal entry saved!");
}
function analyzeDecision() {
  const decision = document.getElementById("decision").value;
  const optionA = document.getElementById("optionA").value;
  const optionB = document.getElementById("optionB").value;

  if (!decision || !optionA || !optionB) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("result").innerText =
    "Think carefully about what aligns with your long-term goals. Trust your logic, not fear.";
}

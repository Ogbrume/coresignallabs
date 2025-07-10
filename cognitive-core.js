// cognitive-core.js

const prompts = [
  "What thought pattern dominated your day?",
  "If you could rewrite one memory, what would change?",
  "What does sovereignty mean to you today?",
  "What emotion is asking for your attention right now?",
  "What belief held you back this week?",
  "Describe the most lucid moment you’ve had recently."
];

function getRandomPrompt() {
  const index = Math.floor(Math.random() * prompts.length);
  return prompts[index];
}

function saveReflection(prompt, response) {
  const history = JSON.parse(localStorage.getItem("cognitiveHistory")) || [];
  history.push({ prompt, response, timestamp: new Date().toISOString() });
  localStorage.setItem("cognitiveHistory", JSON.stringify(history));
}

function displayPrompt() {
  const prompt = getRandomPrompt();
  const promptBox = document.getElementById("promptBox");
  promptBox.innerHTML = `<strong>Prompt:</strong> ${prompt}`;
  document.getElementById("submitBtn").onclick = () => {
    const response = document.getElementById("userResponse").value;
    saveReflection(prompt, response);
    document.getElementById("userResponse").value = "";
    alert("Reflection saved.");
  };
}

document.getElementById("generateBtn").addEventListener("click", displayPrompt);

// Auto-load a prompt on page load
window.onload = displayPrompt;

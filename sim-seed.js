document.getElementById("seedBtn").addEventListener("click", () => {
  const input = document.getElementById("seedInput").value.trim().toLowerCase();
  const values = input.split(/,|;/).map(v => v.trim()).filter(v => v);

  if (values.length === 0) {
    document.getElementById("seedOutput").textContent = "Please enter some seed concepts.";
    return;
  }

  const schema = {
    coreValues: values,
    realms: values.map(v => ({
      name: `${v.charAt(0).toUpperCase() + v.slice(1)} Domain`,
      symbol: `🔹${v.slice(0, 2).toUpperCase()}`,
      narrative: `This is the world where ${v} governs the laws and energy.`,
      guardian: `Archetype of ${v}`,
    })),
    identityRules: {
      self: "You can define your role in each domain. Create, merge, or rewrite them.",
      interaction: "All realms can interact if their values align or clash."
    },
    simulationNote: "This is a symbolic framework. You may expand, rewrite, or translate it to game logic or philosophical practice."
  };

  document.getElementById("seedOutput").textContent = JSON.stringify(schema, null, 2);
});

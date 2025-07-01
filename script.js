const bosses = {
  "Limgrave": [
    "Soldier of Godrick (Tutorial)",
    "Beastman of Farum Azula",
    "Tree Sentinel",
    "Flying Dragon Agheel",
    "Bloodhound Knight Darriwil",
    "Mad Pumpkin Head",
    "Black Knife Assassin",
    "Crucible Knight",
    "Ulcerated Tree Spirit",
    "*Margit, the Fell Omen",
    "*Godrick the Grafted"
  ],
  "Weeping Peninsula": [
    "Erdtree Avatar",
    "Leonine Misbegotten",
    "Ancient Hero of Zamor",
    "Cemetery Shade",
    "Night’s Cavalry"
  ],
  "Liurnia of the Lakes": [
    "Glintstone Dragon Smarag",
    "Cleanrot Knight",
    "Bloodhound Knight",
    "Royal Knight Loretta",
    "Spirit-Caller Snail",
    "Adula, Glintstone Dragon",
    "Night’s Cavalry",
    "*Rennala, Queen of the Full Moon"
  ],
  "Siofra / Nokron / Deeproot Depths": [
    "Ancestor Spirit",
    "Regal Ancestor Spirit",
    "Mimic Tear",
    "Valiant Gargoyles",
    "Fia’s Champions",
    "⭐ Lichdragon Fortissax"
  ],
  "Caelid": [
    "Decaying Ekzykes",
    "Commander O’Neil",
    "Putrid Crystalians",
    "Cleanrot Knights",
    "Putrid Avatar",
    "Deathbird",
    "Night’s Cavalry",
    "Fallingstar Beast",
    "*Starscourge Radahn"
  ],
  "Altus Plateau": [
    "Wormface",
    "Ancient Dragon Lansseax",
    "Tree Sentinel Duo",
    "Demi-Human Queen Gilika",
    "Godskin Apostle",
    "Death Rite Bird",
    "Night’s Cavalry",
    "*Draconic Tree Sentinel"
  ],
  "Leyndell, Royal Capital": [
    "*Godfrey (Golden Shade)",
    "*Morgott, the Omen King"
  ],
  "Mountaintops of the Giants": [
    "Borealis the Freezing Fog",
    "Ancient Hero of Zamor",
    "Death Rite Bird",
    "Erdtree Avatar",
    "*Fire Giant"
  ],
  "Consecrated Snowfield / Mohgwyn": [
    "Sanguine Noble",
    "Putrid Avatar",
    "Death Rite Bird",
    "Night’s Cavalry",
    "⭐ Mohg, Lord of Blood"
  ],
  "Ainsel River / Lake of Rot": [
    "Baleful Shadow",
    "Dragonkin Soldier of Nokstella",
    "Dragonkin Soldier (Lake of Rot)",
    "⭐ Astel, Naturalborn of the Void"
  ],
  "Crumbling Farum Azula": [
    "*Godskin Duo",
    "*Maliketh, the Black Blade",
    "⭐ Dragonlord Placidusax"
  ],
  "Leyndell, Ashen Capital (Endgame)": [
    "*Sir Gideon Ofnir",
    "*Godfrey / Hoarah Loux",
    "*Radagon of the Golden Order",
    "*Elden Beast"
  ]
};

function renderChecklist() {
  const container = document.getElementById("checklist");
  container.innerHTML = "";

  Object.entries(bosses).forEach(([region, bossList]) => {
    const regionDiv = document.createElement("div");
    regionDiv.className = "region";

    const heading = document.createElement("h2");
    heading.textContent = region;
    regionDiv.appendChild(heading);

    bossList.forEach((boss, index) => {
      const id = `${region}-${index}`;
      const isMain = boss.startsWith("*");
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = id;
      input.checked = localStorage.getItem(id) === "true";
      input.addEventListener("change", () => {
        localStorage.setItem(id, input.checked);
        updateProgressCounter();
      });

      const bossName = isMain ? boss.slice(1) : boss;
      const span = document.createElement("span");
      span.textContent = " " + bossName;
      if (isMain) span.className = "main-boss";

      label.appendChild(input);
      label.appendChild(span);
      regionDiv.appendChild(label);
    });

    container.appendChild(regionDiv);
  });

  updateProgressCounter();
}

function resetChecklist() {
  if (confirm("Are you sure you want to reset all progress?")) {
    Object.keys(localStorage).forEach(key => {
      if (key.includes("-")) localStorage.removeItem(key);
    });
    renderChecklist();
  }
}

function updateProgressCounter() {
  const allCheckboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
  const total = allCheckboxes.length;
  const checked = [...allCheckboxes].filter(cb => cb.checked).length;
  const percent = total === 0 ? 0 : ((checked / total) * 100).toFixed(1);
  const counterEl = document.getElementById('progressCounter');
  counterEl.textContent = `Bosses defeated: ${checked} / ${total} (${percent}%)`;
}


renderChecklist();

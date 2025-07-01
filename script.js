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
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.gap = "10px";

      // Checkbox
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = id;
      input.checked = localStorage.getItem(id) === "true";
      input.addEventListener("change", () => {
        localStorage.setItem(id, input.checked);
        updateProgressCounter();
      });

      // Boss name
      const bossName = isMain ? boss.slice(1) : boss;
      const span = document.createElement("span");
      span.textContent = bossName;
      if (isMain) span.className = "main-boss";
      span.style.flexGrow = "1";

      // Death counter container
      const deathContainer = document.createElement("div");
      deathContainer.style.display = "flex";
      deathContainer.style.alignItems = "center";
      deathContainer.style.gap = "5px";
      deathContainer.style.minWidth = "100px";
      deathContainer.style.justifyContent = "flex-end";

      // Death count display
      const deathCountSpan = document.createElement("span");
      deathCountSpan.style.minWidth = "20px";
      deathCountSpan.style.textAlign = "center";

      // Get saved death count or start at 0
      let deathCount = parseInt(localStorage.getItem(id + '-deaths')) || 0;
      deathCountSpan.textContent = deathCount;

      // Increment button
      const incBtn = document.createElement("button");
      incBtn.textContent = "+";
      incBtn.style.cursor = "pointer";
      incBtn.style.padding = "2px 6px";
      incBtn.addEventListener("click", (e) => {
        e.preventDefault();
        deathCount++;
        localStorage.setItem(id + '-deaths', deathCount);
        deathCountSpan.textContent = deathCount;
      });

      // Decrement button
      const decBtn = document.createElement("button");
      decBtn.textContent = "–";
      decBtn.style.cursor = "pointer";
      decBtn.style.padding = "2px 6px";
      decBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (deathCount > 0) {
          deathCount--;
          localStorage.setItem(id + '-deaths', deathCount);
          deathCountSpan.textContent = deathCount;
        }
      });

      deathContainer.appendChild(decBtn);
      deathContainer.appendChild(deathCountSpan);
      deathContainer.appendChild(incBtn);

      label.appendChild(input);
      label.appendChild(span);
      label.appendChild(deathContainer);

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
    updateProgressCounter();
  }
}

function updateProgressCounter() {
  const allCheckboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
  const total = allCheckboxes.length;
  const checked = [...allCheckboxes].filter(cb => cb.checked).length;
  const percent = total === 0 ? 0 : ((checked / total) * 100).toFixed(1);
  const counterEl = document.getElementById('progressCounter');
  if (counterEl) {
    counterEl.textContent = `Bosses defeated: ${checked} / ${total} (${percent}%)`;
  }
}


renderChecklist();

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
    "Grave Warden Duelist",
    "Bell Bearing Hunter",
    "Demi-Human Chief",
    "Erdtree Burial Watchdog",
    "Guardian Golem",
    "Stone Digger Troll",
    "Tibia Mariner",
    "*Margit, the Fell Omen",
    "*Godrick the Grafted"
  ],
  "Weeping Peninsula": [
    "Erdtree Avatar",
    "Leonine Misbegotten",
    "Ancient Hero of Zamor",
    "Cemetery Shade",
    "Deathbird",
    "Erdtree Burial Watchdog",
    "Scaly Misbegotten",
    "Miranda the Blighted Bloom",
    "Tibia Mariner",
    "Night’s Cavalry"
  ],
  "Liurnia of the Lakes": [
    "Glintstone Dragon Smarag",
    "Cleanrot Knight",
    "Bloodhound Knight",
    "Royal Knight Loretta",
    "Spirit-Caller Snail",
    "Adula, Glintstone Dragon",
    "Night’s Cavalry (North)",
    "Night’s Cavalry (South)",
    "Bell Bearing Hunter",
    "Black Knife Assassin",
    "Bols, Carian Knight",
    "Cemetery Shade",
    "Deathbird",
    "Death Rite Bird",
    "Erdtree Avatar (Northeast)",
    "Erdtree Avatar (Southwest)",
    "Erdtree Burial Watchdog",
    "Grafted Scion (Four Belfries)",
    "Magma Wyrm Makar",
    "Omenslayer",
    "*Red Wolf of Radagon",
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
    "Battlemage Hugues",
    "Frenzied Duelist",
    "Magma Wyrm",
    "Putrid Crystalian Trio",
    "Nox Swordstress & Nox Priest",
    "Erdtree Burial Watchdog (Duo)",
    "Mad Pumpkin Heads",
    "*Starscourge Radahn"
  ],
  "Dragonbarrow": [
    "Beast of Farum Azula",
    "⭐ Bell Bearing Hunter",
    "⭐ Black Blade Kindred (Bestial Sanctum)",
    "Flying Dragon Greyll",
    "Godskin Apostle",
    "Night’s Cavalry",
    "Putrid Avatar",
    "Putrid Tree Spirit"
  ],
  "Mt. Gelmir": [
    "Abductor Virgins (Duo)",
    "Demi-Human Queen Margot",
    "Demi-Human Queen Maggie",
    "Full-Grown Fallingstar Beast",
    "God-Devouring Serpent / Rykard",
    "Kindred of Rot (Duo)",
    "Magma Wyrm",
    "Red Wolf of the Champion",
    "Ulcerated Tree Spirit"
  ],
  "Altus Plateau": [
    "Wormface",
    "Ancient Dragon Lansseax",
    "Tree Sentinel Duo",
    "Demi-Human Queen Gilika",
    "Godskin Apostle",
    "Death Rite Bird",
    "Night’s Cavalry",
    "Elemer of the Briar",
    "Godfrey the Grafted",
    "Necromancer Garris",
    "Onyx Lord",
    "Perfumer Tricia / Misbegotten Warrior",
    "Omenskiller / Miranda",
    "*Draconic Tree Sentinel"
  ],
  "Leyndell, Royal Capital": [
    "*Godfrey (Golden Shade)",
    "*Morgott, the Omen King",
    "Bell Bearing Hunter",
    "Crucible Knight Ordovis / Crucible Knight",
    "Deathbird",
    "Esgar, Priest of Blood"
  ],
  "Mountaintops of the Giants": [
    "Borealis the Freezing Fog",
    "Ancient Hero of Zamor",
    "Commander Niall",
    "Death Rite Bird",
    "Erdtree Avatar",
    "Godskin (Summoner Snail)",
    "Vyke, Knight of the Roundtable",
    "Ulcerated Tree Spirit",
    "*Fire Giant"
  ],
  "Consecrated Snowfield / Mohgwyn": [
    "Sanguine Noble",
    "Putrid Avatar",
    "Death Rite Bird",
    "Night’s Cavalry",
    "*Mohg, Lord of Blood",
    "Astel, Stars of Darkness",
    "Great Wyrm Theodorix",
    "Misbegotten Crusader",
    "Putrid Grave Warden Duelist",
    "Night’s Cavalry (Duo)"
  ],
  "Forbidden Lands": [
    "Black Blade Kindred",
    "Stray Mimic Tear",
    "Night’s Cavalry"
  ],
  "Ainsel River / Lake of Rot": [
    "Baleful Shadow",
    "Dragonkin Soldier of Nokstella",
    "Dragonkin Soldier (Lake of Rot)",
    "⭐ Astel, Naturalborn of the Void"
  ],
  "Miquella's Haligtree": [
    "Loretta, Knight of the Haligtree",
    "Putrid Avatar",
    "Putrid Tree Spirit",
    "*Malenia, Blade of Miquella"
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
      if (isMain) span.classList.add("main-boss");

      // Highlight Malenia as highest difficulty
      if (bossName === "Malenia, Blade of Miquella") {
        span.classList.add("boss-highest");
      }
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


function exportData() {
  if (!confirm("Do you want to export your current checklist data?")) return;

  const playerName = prompt("Enter Player Name:");
  if (!playerName) {
    alert("Export cancelled: Player Name is required.");
    return;
  }

  // Gather all checkboxes
  const allCheckboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
  const totalBosses = allCheckboxes.length;
  const checkedBosses = [...allCheckboxes].filter(cb => cb.checked).length;
  const percent = totalBosses === 0 ? 0 : ((checkedBosses / totalBosses) * 100).toFixed(1);

  // Count main story and minibosses
  let totalStoryBosses = 0, totalMiniBosses = 0;
  let beatenStoryBosses = 0, beatenMiniBosses = 0;

  // Flatten bosses object to array of { region, name, isMain, id }
  const allBossEntries = [];
  Object.entries(bosses).forEach(([region, bossList]) => {
    bossList.forEach((boss, index) => {
      const isMain = boss.startsWith("*");
      const bossName = isMain ? boss.slice(1) : boss;
      const id = `${region}-${index}`;
      allBossEntries.push({ bossName, isMain, id });
      if (isMain) totalStoryBosses++;
      else totalMiniBosses++;
    });
  });

  allBossEntries.forEach(({ id, isMain }) => {
    const checked = localStorage.getItem(id) === "true";
    if (checked) {
      if (isMain) beatenStoryBosses++;
      else beatenMiniBosses++;
    }
  });

  // Build export text
  let output = `Player: ${playerName}\n`;
  output += `Completion: ${percent}%\n`;
  output += `Bosses: ${checkedBosses} / ${totalBosses}\n`;
  output += `Story Bosses: ${beatenStoryBosses} / ${totalStoryBosses}\n`;
  output += `Mini Bosses: ${beatenMiniBosses} / ${totalMiniBosses}\n\n`;

  allBossEntries.forEach(({ bossName, isMain, id }) => {
    const beaten = localStorage.getItem(id) === "true";
    const deathCount = localStorage.getItem(id + '-deaths') || 0;
    const statusIcon = beaten ? "✅" : "❌";

    output += `${bossName}: ${statusIcon} [${deathCount}]\n`;
  });

  // Create and trigger download
  const blob = new Blob([output], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `eldenring_boss_checklist_${playerName.replace(/\s+/g, '_').toLowerCase()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

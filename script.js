const bosses = {
  "Limgrave": [
    { name: "Soldier of Godrick (Tutorial)", location: "Stranded Graveyard, East Limgrave", main: false },
    { name: "Beastman of Farum Azula", location: "Groveside Cave, East Limgrave", main: false },
    { name: "Tree Sentinel", location: "Near The First Step Site of Grace, East Limgrave", main: false },
    { name: "Flying Dragon Agheel", location: "Dragon-Burnt Ruins, East Limgrave", main: false },
    { name: "Bloodhound Knight Darriwil", location: "Darkroot Basin, Northwest Limgrave", main: false },
    { name: "Mad Pumpkin Head", location: "Mistwood, East Limgrave", main: false },
    { name: "Black Knife Assassin", location: "Stormhill, South Limgrave", main: false },
    { name: "Crucible Knight", location: "Stormhill, South Limgrave", main: false },
    { name: "Ulcerated Tree Spirit", location: "Mistwood, East Limgrave", main: false },
    { name: "Grave Warden Duelist", location: "Abandoned Cave, South Limgrave", main: false },
    { name: "Bell Bearing Hunter", location: "Hidden Path to the Erdtree, South Limgrave", main: false },
    { name: "Demi-Human Chief", location: "Murkwater Cave, South Limgrave", main: false },
    { name: "Erdtree Burial Watchdog", location: "Mistwood, East Limgrave", main: false },
    { name: "Guardian Golem", location: "Gatefront Ruins, Central Limgrave", main: false },
    { name: "Stone Digger Troll", location: "Limgrave Tunnels, Central Limgrave", main: false },
    { name: "Tibia Mariner", location: "Limgrave Coast, West Limgrave", main: false },
    { name: "Margit, the Fell Omen", location: "Stormhill Gate, South Limgrave", main: true },
    { name: "Godrick the Grafted", location: "Stormhill Castle, South Limgrave", main: true }
  ],
  "Weeping Peninsula": [
    { name: "Erdtree Avatar", location: "Weeping Peninsula, West of Weeping Peninsula Site of Grace", main: false },
    { name: "Leonine Misbegotten", location: "Mistwood, Weeping Peninsula", main: false },
    { name: "Ancient Hero of Zamor", location: "Sewers below Weeping Peninsula", main: false },
    { name: "Cemetery Shade", location: "Mistwood Catacombs, Weeping Peninsula", main: false },
    { name: "Deathbird", location: "Weeping Peninsula, West Coast near Castle Morne", main: false },
    { name: "Erdtree Burial Watchdog", location: "Weeping Peninsula, South Coast", main: false },
    { name: "Scaly Misbegotten", location: "Murkwater Catacombs, Weeping Peninsula", main: false },
    { name: "Miranda the Blighted Bloom", location: "Blighted Village, Weeping Peninsula", main: false },
    { name: "Tibia Mariner", location: "Weeping Peninsula Coast, near Mistwood", main: false },
    { name: "Night’s Cavalry", location: "Weeping Peninsula roads, appears at night", main: false }
  ],
  "Liurnia of the Lakes": [
    { name: "Glintstone Dragon Smarag", location: "Northern Liurnia, Abandoned Cave", main: false },
    { name: "Cleanrot Knight", location: "Raya Lucaria Grand Library, Liurnia", main: false },
    { name: "Bloodhound Knight", location: "Siofra River Bank, Liurnia", main: false },
    { name: "Royal Knight Loretta", location: "Caria Manor, Liurnia", main: false },
    { name: "Spirit-Caller Snail", location: "Liurnia, near Ranni’s Rise", main: false },
    { name: "Adula, Glintstone Dragon", location: "Lakeside Crystal Cave, Liurnia", main: false },
    { name: "Night’s Cavalry (North)", location: "Northern roads, Liurnia, appears at night", main: false },
    { name: "Night’s Cavalry (South)", location: "Southern roads, Liurnia, appears at night", main: false },
    { name: "Bell Bearing Hunter", location: "Near Caria Manor, Liurnia", main: false },
    { name: "Black Knife Assassin", location: "Caria Manor Grounds, Liurnia", main: false },
    { name: "Bols, Carian Knight", location: "Caria Manor, Liurnia", main: false },
    { name: "Cemetery Shade", location: "Cemetery of Ash, Liurnia", main: false },
    { name: "Deathbird", location: "Southwest Liurnia swamp", main: false },
    { name: "Death Rite Bird", location: "Southwest Liurnia swamp", main: false },
    { name: "Erdtree Avatar (Northeast)", location: "Northeast Liurnia near Erdtree", main: false },
    { name: "Erdtree Avatar (Southwest)", location: "Southwest Liurnia near swamp", main: false },
    { name: "Erdtree Burial Watchdog", location: "Near Lake of Rot, Liurnia", main: false },
    { name: "Grafted Scion (Four Belfries)", location: "Four Belfries, Liurnia", main: false },
    { name: "Magma Wyrm Makar", location: "Ranni’s Rise Cavern, Liurnia", main: false },
    { name: "Omenslayer", location: "Near swamp, Liurnia", main: false },
    { name: "Red Wolf of Radagon", location: "Ranni’s Rise, Liurnia", main: true },
    { name: "Rennala, Queen of the Full Moon", location: "Ranni’s Rise, Grand Library, Liurnia", main: true }
  ],
  "Siofra / Nokron / Deeproot Depths": [
    { name: "Ancestor Spirit", location: "Siofra River Bank", main: false },
    { name: "Regal Ancestor Spirit", location: "Siofra River Bank", main: false },
    { name: "Mimic Tear", location: "Ranni’s Rise", main: false },
    { name: "Valiant Gargoyles", location: "Nokron, Night’s Sacred Ground", main: false },
    { name: "Fia’s Champions", location: "Deeproot Depths, Fia’s area", main: false },
    { name: "Lichdragon Fortissax", location: "Deeproot Depths, Frozen Cavern", main: false }
  ],
  "Caelid": [
    { name: "Decaying Ekzykes", location: "Near Caelid Waypoint", main: false },
    { name: "Commander O’Neil", location: "Redmane Castle Grounds", main: false },
    { name: "Putrid Crystalians", location: "Smoldering Wall", main: false },
    { name: "Cleanrot Knights", location: "Smoldering Wall", main: false },
    { name: "Putrid Avatar", location: "Smoldering Wall", main: false },
    { name: "Deathbird", location: "Southern Swamp", main: false },
    { name: "Night’s Cavalry", location: "Roads in Caelid (night)", main: false },
    { name: "Fallingstar Beast", location: "Near Caelid Waypoint", main: false },
    { name: "Battlemage Hugues", location: "Near Smoldering Wall", main: false },
    { name: "Frenzied Duelist", location: "Smoldering Wall", main: false },
    { name: "Magma Wyrm", location: "Near Smoldering Wall", main: false },
    { name: "Putrid Crystalian Trio", location: "Smoldering Wall", main: false },
    { name: "Nox Swordstress & Nox Priest", location: "Near Smoldering Wall", main: false },
    { name: "Erdtree Burial Watchdog (Duo)", location: "Smoldering Wall", main: false },
    { name: "Mad Pumpkin Heads", location: "Smoldering Wall", main: false },
    { name: "Starscourge Radahn", location: "Redmane Castle", main: true }
  ],
  "Dragonbarrow": [
    { name: "Beast of Farum Azula", location: "Farum Azula Ruins", main: false },
    { name: "Bell Bearing Hunter", location: "Near Bestial Sanctum", main: false },
    { name: "Black Blade Kindred (Bestial Sanctum)", location: "Bestial Sanctum", main: false },
    { name: "Flying Dragon Greyll", location: "Near Bestial Sanctum", main: false },
    { name: "Godskin Apostle", location: "Near Bestial Sanctum", main: false },
    { name: "Night’s Cavalry", location: "Roads at night", main: false },
    { name: "Putrid Avatar", location: "Near Bestial Sanctum", main: false },
    { name: "Putrid Tree Spirit", location: "Near Bestial Sanctum", main: false }
  ],
  "Mt. Gelmir": [
    { name: "Abductor Virgins (Duo)", location: "Near Abandoned Cave", main: false },
    { name: "Demi-Human Queen Margot", location: "Margot’s Cave", main: false },
    { name: "Demi-Human Queen Maggie", location: "Margot’s Cave", main: false },
    { name: "Full-Grown Fallingstar Beast", location: "Near Abandoned Cave", main: false },
    { name: "God-Devouring Serpent / Rykard", location: "Volcano Manor", main: false },
    { name: "Kindred of Rot (Duo)", location: "Volcano Manor", main: false },
    { name: "Magma Wyrm", location: "Volcano Manor", main: false },
    { name: "Red Wolf of the Champion", location: "Near Volcano Manor", main: false },
    { name: "Ulcerated Tree Spirit", location: "Near Volcano Manor", main: false }
  ],
  "Altus Plateau": [
    { name: "Wormface", location: "Near Cliffside Cavern", main: false },
    { name: "Ancient Dragon Lansseax", location: "Near Cliffside Cavern", main: false },
    { name: "Tree Sentinel Duo", location: "Near Erdtree", main: false },
    { name: "Demi-Human Queen Gilika", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Godskin Apostle", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Death Rite Bird", location: "Near Erdtree", main: false },
    { name: "Night’s Cavalry", location: "Roads at night", main: false },
    { name: "Elemer of the Briar", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Godfrey the Grafted", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Necromancer Garris", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Onyx Lord", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Perfumer Tricia / Misbegotten Warrior", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Omenskiller / Miranda", location: "Near Ruin-Strewn Precipice", main: false },
    { name: "Draconic Tree Sentinel", location: "Near Erdtree", main: true }
  ],
  "Leyndell, Royal Capital": [
    { name: "Godfrey (Golden Shade)", location: "Main Plaza", main: true },
    { name: "Morgott, the Omen King", location: "Main Plaza", main: true },
    { name: "Bell Bearing Hunter", location: "Sewers below Royal Capital", main: false },
    { name: "Crucible Knight Ordovis / Crucible Knight", location: "Castle Grounds", main: false },
    { name: "Deathbird", location: "Castle Grounds", main: false },
    { name: "Esgar, Priest of Blood", location: "Sewers below Royal Capital", main: false }
  ],
  "Mountaintops of the Giants": [
    { name: "Borealis the Freezing Fog", location: "Near Forge of the Giants", main: false },
    { name: "Ancient Hero of Zamor", location: "Near Forge of the Giants", main: false },
    { name: "Commander Niall", location: "Near Forge of the Giants", main: false },
    { name: "Death Rite Bird", location: "Near Erdtree", main: false },
    { name: "Erdtree Avatar", location: "Near Erdtree", main: false },
    { name: "Godskin (Summoner Snail)", location: "Near Erdtree", main: false },
    { name: "Vyke, Knight of the Roundtable", location: "Near Forge of the Giants", main: false },
    { name: "Ulcerated Tree Spirit", location: "Near Forge of the Giants", main: false },
    { name: "Fire Giant", location: "Forge of the Giants", main: true }
  ],
  "Consecrated Snowfield / Mohgwyn": [
    { name: "Sanguine Noble", location: "Albinauric Rise", main: false },
    { name: "Putrid Avatar", location: "Mohgwyn Palace", main: false },
    { name: "Death Rite Bird", location: "Mohgwyn Palace", main: false },
    { name: "Night’s Cavalry", location: "Roads at night", main: false },
    { name: "Mohg, Lord of Blood", location: "Mohgwyn Palace Throne", main: true },
    { name: "Astel, Stars of Darkness", location: "Astel’s Arena", main: false },
    { name: "Great Wyrm Theodorix", location: "Albinauric Rise", main: false },
    { name: "Misbegotten Crusader", location: "Albinauric Rise", main: false },
    { name: "Putrid Grave Warden Duelist", location: "Albinauric Rise", main: false },
    { name: "Night’s Cavalry (Duo)", location: "Roads at night", main: false }
  ],
  "Forbidden Lands": [
    { name: "Black Blade Kindred", location: "Crucible Knights Arena", main: false },
    { name: "Stray Mimic Tear", location: "Crucible Knights Arena", main: false },
    { name: "Night’s Cavalry", location: "Roads at night", main: false }
  ],
  "Ainsel River / Lake of Rot": [
    { name: "Baleful Shadow", location: "Near Baleful Shadow’s Arena", main: false },
    { name: "Dragonkin Soldier of Nokstella", location: "Nokstella Ruins", main: false },
    { name: "Dragonkin Soldier (Lake of Rot)", location: "Lake of Rot", main: false },
    { name: "Astel, Naturalborn of the Void", location: "Deep Ainsel Well", main: false }
  ],
  "Miquella's Haligtree": [
    { name: "Loretta, Knight of the Haligtree", location: "Tower of the Haligtree", main: false },
    { name: "Putrid Avatar", location: "Haligtree Town", main: false },
    { name: "Putrid Tree Spirit", location: "Haligtree Town", main: false },
    { name: "Malenia, Blade of Miquella", location: "Elphael, Brace of the Haligtree", main: true }
  ],
  "Crumbling Farum Azula": [
    { name: "Godskin Duo", location: "Godskin Duo Arena", main: true },
    { name: "Maliketh, the Black Blade", location: "Keep of the Black Blade", main: true },
    { name: "Dragonlord Placidusax", location: "Dragonlord’s Arena", main: false }
  ],
  "Leyndell, Ashen Capital (Endgame)": [
    { name: "Sir Gideon Ofnir", location: "Grand Library", main: true },
    { name: "Godfrey / Hoarah Loux", location: "Main Plaza", main: true },
    { name: "Radagon of the Golden Order", location: "Erdtree Throne", main: true },
    { name: "Elden Beast", location: "Erdtree Throne", main: true }
  ]
};
// Calculate total main bosses count once
const totalMainBosses = Object.values(bosses)
  .flat()
  .filter(boss => boss.main)
  .length;

// Player level and class management
let playerLevel = parseInt(localStorage.getItem('playerLevel')) || 1;
let playerClass = localStorage.getItem('playerClass') || 'Vagabond';

function changeLevel(delta) {
  playerLevel = Math.max(1, Math.min(713, playerLevel + delta)); // Elden Ring max level is 713
  localStorage.setItem('playerLevel', playerLevel);
  updateLevelDisplay();
}

function updateLevelDisplay() {
  document.getElementById('levelDisplay').textContent = playerLevel;
}

function updateClass() {
  const select = document.getElementById('classSelect');
  playerClass = select.value;
  localStorage.setItem('playerClass', playerClass);
}

function initPlayerInfo() {
  updateLevelDisplay();
  document.getElementById('classSelect').value = playerClass;
}

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
      const isMain = boss.main || false;
      const bossName = boss.name;
      const bossLocation = boss.location;

      const label = document.createElement("label");
      label.classList.add("boss-label");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = id;
      input.checked = localStorage.getItem(id) === "true";
      input.addEventListener("change", () => {
        localStorage.setItem(id, input.checked);
        
        // Track defeat level when boss is checked
        if (input.checked) {
          const currentDefeatLevel = localStorage.getItem(id + "-defeatLevel");
          if (!currentDefeatLevel) {
            localStorage.setItem(id + "-defeatLevel", playerLevel);
          }
        } else {
          // Remove defeat level when unchecked
          localStorage.removeItem(id + "-defeatLevel");
        }
        
        updateBossDefeatLevel(id);
        updateProgressCounter();
      });

      const nameSpan = document.createElement("span");
      nameSpan.textContent = bossName;
      nameSpan.classList.add("boss-name");
      if (isMain) nameSpan.classList.add("main-boss");
      if (bossName === "Malenia, Blade of Miquella") {
        nameSpan.classList.add("boss-highest");
      }

      const locationSpan = document.createElement("span");
      locationSpan.textContent = ` (${bossLocation})`;
      locationSpan.classList.add("boss-location");

      // Defeat level container
      const defeatLevelContainer = document.createElement("div");
      defeatLevelContainer.classList.add("defeat-level-container");
      defeatLevelContainer.id = `defeatLevel-${id}`;

      const deathContainer = document.createElement("div");
      deathContainer.classList.add("death-container");

      const deathCountSpan = document.createElement("span");
      deathCountSpan.classList.add("death-count");

      let deathCount = parseInt(localStorage.getItem(id + "-deaths")) || 0;
      deathCountSpan.textContent = deathCount;

      const incBtn = document.createElement("button");
      incBtn.textContent = "+";
      incBtn.classList.add("death-button");
      incBtn.addEventListener("click", (e) => {
        e.preventDefault();
        deathCount++;
        localStorage.setItem(id + "-deaths", deathCount);
        deathCountSpan.textContent = deathCount;
        updateProgressCounter();
      });

      const decBtn = document.createElement("button");
      decBtn.textContent = "–";
      decBtn.classList.add("death-button");
      decBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (deathCount > 0) {
          deathCount--;
          localStorage.setItem(id + "-deaths", deathCount);
          deathCountSpan.textContent = deathCount;
          updateProgressCounter();
        }
      });

      deathContainer.appendChild(decBtn);
      deathContainer.appendChild(deathCountSpan);
      deathContainer.appendChild(incBtn);

      label.appendChild(input);
      label.appendChild(nameSpan);
      label.appendChild(locationSpan);
      label.appendChild(defeatLevelContainer);

      regionDiv.appendChild(label);
      
      // Initialize defeat level display
      requestAnimationFrame(() => {
        if (input.checked) {
          updateBossDefeatLevel(id);
        }
      });

      label.appendChild(deathContainer);
    });

    container.appendChild(regionDiv);
  });

  updateProgressCounter();
}

function updateBossDefeatLevel(bossId) {
  const container = document.getElementById(`defeatLevel-${bossId}`);
  if (!container) return; 
  const isDefeated = localStorage.getItem(bossId) === "true";
  
  if (isDefeated) {
    const defeatLevel = localStorage.getItem(bossId + "-defeatLevel") || playerLevel;
    
    if (!container.querySelector('.defeat-level-input')) {
      const levelLabel = document.createElement("span");
      levelLabel.textContent = "Defeated at level: ";
      levelLabel.classList.add("defeat-level-label");
      
      const levelInput = document.createElement("input");
      levelInput.type = "number";
      levelInput.min = "1";
      levelInput.max = "713";
      levelInput.value = defeatLevel;
      levelInput.classList.add("defeat-level-input");
      
      levelInput.addEventListener("change", (e) => {
        const newLevel = Math.max(1, Math.min(713, parseInt(e.target.value) || 1));
        e.target.value = newLevel;
        localStorage.setItem(bossId + "-defeatLevel", newLevel);
      });
      
      levelInput.addEventListener("blur", (e) => {
        const newLevel = Math.max(1, Math.min(713, parseInt(e.target.value) || 1));
        e.target.value = newLevel;
        localStorage.setItem(bossId + "-defeatLevel", newLevel);
      });
      
      container.appendChild(levelLabel);
      container.appendChild(levelInput);
    }
  } else {
    container.innerHTML = "";
  }
}

function resetChecklist() {
  if (confirm("Are you sure you want to reset all progress? This will also reset your level and class.")) {
    Object.keys(localStorage).forEach((key) => {
      localStorage.removeItem(key);
    });
    playerLevel = 1;
    playerClass = 'Vagabond';
    initPlayerInfo();
    renderChecklist();
    updateProgressCounter();
  }
}

function updateProgressCounter() {
  const allCheckboxes = document.querySelectorAll("#checklist input[type='checkbox']");
  const total = allCheckboxes.length;
  const checked = [...allCheckboxes].filter((cb) => cb.checked).length;
  const percent = total === 0 ? 0 : ((checked / total) * 100).toFixed(1);

  const counterEl = document.getElementById("progressCounter");
  const storyCounterEl = document.getElementById("storyProgressCounter");
  const totalDeathsEl = document.getElementById("totalDeathsCounter");

  if (counterEl) {
    counterEl.textContent = `Bosses defeated: ${checked} / ${total}`;
  }

  let storyDefeatedCount = 0;
  allCheckboxes.forEach((checkbox) => {
    const [region, index] = checkbox.id.split("-");
    const boss = bosses[region] && bosses[region][parseInt(index)];
    if (boss && boss.main && checkbox.checked) {
      storyDefeatedCount++;
    }
  });

  if (storyCounterEl) {
    storyCounterEl.textContent = `Main Bosses Defeated: ${storyDefeatedCount} / ${totalMainBosses}`;
  }

  // Calculate total deaths by summing all individual death counts
  let totalDeaths = 0;
  Object.keys(localStorage).forEach((key) => {
    if (key.endsWith("-deaths")) {
      const val = parseInt(localStorage.getItem(key));
      if (!isNaN(val)) totalDeaths += val;
    }
  });

  if (totalDeathsEl) {
    totalDeathsEl.textContent = `Total Deaths: ${totalDeaths}`;
  }

  // Update progress bar
  const bar = document.getElementById("progressBar");
  if (bar) {
    bar.style.width = `${percent}%`;
    bar.textContent = `${percent}%`;
  }
}

function exportData() {
  if (!confirm("Do you want to export your current checklist data?")) return;

  const playerName = prompt("Enter Player Name:");
  if (!playerName) {
    alert("Export cancelled: Player Name is required.");
    return;
  }

  const allCheckboxes = document.querySelectorAll("#checklist input[type='checkbox']");
  const totalBosses = allCheckboxes.length;
  const checkedBosses = [...allCheckboxes].filter((cb) => cb.checked).length;
  const percent = totalBosses === 0 ? 0 : ((checkedBosses / totalBosses) * 100).toFixed(1);

  let totalStoryBosses = 0,
    totalMiniBosses = 0;
  let beatenStoryBosses = 0,
    beatenMiniBosses = 0;

  const allBossEntries = [];
  Object.entries(bosses).forEach(([region, bossList]) => {
    bossList.forEach((boss, index) => {
      const isMain = boss.main || false;
      const bossName = boss.name;
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

  let output = `Player: ${playerName}\n`;
  output += `Level: ${playerLevel}\n`;
  output += `Class: ${playerClass}\n`;
  output += `Completion: ${percent}%\n`;
  output += `Bosses: ${checkedBosses} / ${totalBosses}\n`;
  output += `Story Bosses: ${beatenStoryBosses} / ${totalStoryBosses}\n`;
  output += `Mini Bosses: ${beatenMiniBosses} / ${totalMiniBosses}\n\n`;

  allBossEntries.forEach(({ bossName, isMain, id }) => {
    const beaten = localStorage.getItem(id) === "true";
    const deathCount = localStorage.getItem(id + "-deaths") || 0;
    const defeatLevel = localStorage.getItem(id + "-defeatLevel") || "N/A";
    const statusIcon = beaten ? "✅" : "❌";

    output += `${bossName}: ${statusIcon} [Deaths: ${deathCount}] [Level: ${defeatLevel}]\n`;
  });

  const blob = new Blob([output], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `eldenring_boss_checklist_${playerName.replace(/\s+/g, "_").toLowerCase()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Initialize everything when the page loads
initPlayerInfo();
renderChecklist();
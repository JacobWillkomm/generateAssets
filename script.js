//Assets to Generate
const filePaths = {
    "champions.txt" : "https://raw.communitydragon.org/13.16/game/assets/ux/tft/championsplashes/",
    "items.txt" : "",
    "traits.txt" : "",
    "augments.txt" : ""
}

const specialNames = {
  "aurelionsol" : "Aurelion Sol",
  "belveth" : "Bel'Veth",
  "chogath" : "Cho'Gath",
  "drmundo" : "Dr. Mundo",
  "dragonearth" : "Terra",
  "dragongreen" : "Shi Oh Yu",
  "dragonswain" : "Dragon Tyrant Swain",
  "dragonblue" : "Daeja",
  "dragongold" : "Idas",
  "aquaticdragon" : "Sohm",
  "dragonpurple" : "Sy'fen",
  "dragonguild" : "Zippy",
  "jarviniv" : "Jarvin IV",
  "ksante" : "K'Sante",
  "kaisa" : "Kai'Sa",
  "khazix" : "Kha'Zix",
  "kogmaw" : "Kog'Maw",
  "leblanc" : "LeBlanc",
  "leesin" : "Lee Sin",
  "masteryi" : "Master Yi",
  "missfortune" : "Miss Fortune",
  "reksai" : "Rek'Sai",
  "tahmkench" : "Tahm Kench",
  "twistedfate" : "Twisted Fate",
  "velkoz" : "Vel'Koz",
  "xinzhao" : "Xin Zhao"
}

let championObj = {
}


const fs = require('fs');


// Specify the path to the file you want to read
const filePath = 'inputs/'+Object.keys(filePaths)[0];

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the file content into an array of lines
  const lines = data.split('\n');

  //For each champion, generate the information for the JSON file and add it to the champion object
  lines.forEach((line, index) => {
    generateChampion(line)
  });
  console.log((championObj["set_9"]))
  //Write the object to a json file
  fs.writeFileSync('outputs/champions.json', JSON.stringify(championObj, null, 1));

});



function generateChampion(text){
  championUrl = text.split("\"")[3]
  set = championUrl.split("_")[0].slice(3,4)

  if(championUrl.includes("square") || championUrl.includes("mobile")){
    championName = championUrl.split("_")[1].split(".")[0]
    displayName = (specialNames[championName] === undefined) ? championName.slice(0,1).toUpperCase() + championName.slice(1) : specialNames[championName]
    assetUrl = filePaths["champions.txt"] + championUrl
    console.log(set, championName, assetUrl)
    if(championObj["set_"+set] === undefined){championObj["set_"+set] = {}}
    championObj["set_"+set][championName] = {
      "name" : displayName,
      "assetUrl" : assetUrl
    }
  }



  

}
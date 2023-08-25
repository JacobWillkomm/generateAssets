//Assets to Generate
const filePaths = {
    "champions.txt" : "https://raw.communitydragon.org/13.16/game/assets/ux/tft/championsplashes/"
}


const fs = require('fs');


// Specify the path to the file you want to read
const filePath = 'inputs/'+Object.keys(filePaths)[0];

// Read the file and print each line to the console
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the file content into an array of lines
  const lines = data.split('\n');

  // Print each line to the console
  lines.forEach((line, index) => {
    generateChampion(line)
  });
});

function generateChampion(text){
    assetUrl = filePaths["champions.txt"] + text.split("\"")[3]
    console.log(assetUrl)

}
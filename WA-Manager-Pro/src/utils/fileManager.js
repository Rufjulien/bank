const fs = require('fs');
const path = require('path');

function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function loadJSON(filePath) {
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath));
  }
  return {};
}

module.exports = { saveJSON, loadJSON };

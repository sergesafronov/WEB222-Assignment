// emojis.js

const emojis = '♥️♣️♦️♠️';
const numRows = 75; 
const numColumns = 150; 

const emojisContainer = document.createElement('div');
emojisContainer.id = 'emojis-background'; 

document.body.appendChild(emojisContainer);

for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numColumns; j++) {
    const emoji = document.createElement('span');
    emoji.textContent = emojis;
    emojisContainer.appendChild(emoji);
  }
  emojisContainer.appendChild(document.createElement('br'));
}


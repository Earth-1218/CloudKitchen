// upload base64 image function

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function getImageFromBase64String(base64String) {
  const base64Data = base64String.split(';base64,')[1];
  const imageBuffer = Buffer.from(base64Data, 'base64');
  const imageExtension = base64String.split(';')[0].split('/')[1];
  const uniqueString = uuidv4();
  const imagePath = path.join('public', 'upload', 'images', `${uniqueString}.${imageExtension}`);
  fs.writeFileSync(imagePath, imageBuffer);
  return `${uniqueString}.${imageExtension}`;
}

module.exports = {
    getImageFromBase64String
};
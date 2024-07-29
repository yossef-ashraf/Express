// utils/imageUtils.js

const fs = require('fs');
const path = require('path');

const imageUtils = {
    base64Image: (filePath) => {
        // Read the file and convert it to Base64
        const fileContent = fs.readFileSync(filePath);
        const base64Image = Buffer.from(fileContent).toString('base64');
        // Get the original file extension
        const extension = path.extname(filePath).slice(1);
        // Set the 'img' field in Base64 format with the extension
        return `data:image/${extension};base64,${base64Image}`;
    },

    addImageInPublic: (folderName = 'Images', subFolderName = 'Img', file) => {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        const extension = path.extname(file.originalname);
        const imageName = `${timestamp}${random}${subFolderName}${extension}`;
        const imagePath = path.join(__dirname, '..', 'public', folderName, subFolderName, imageName);

        fs.mkdirSync(path.dirname(imagePath), { recursive: true });
        fs.writeFileSync(imagePath, file.buffer);

        return `${folderName}/${subFolderName}/${imageName}`;
    },

    updateImageInPublic: (folderName = 'Images', subFolderName = 'Img', file, oldImagePath) => {
        const oldImageFullPath = path.join(__dirname, '..', 'public', oldImagePath);
        if (fs.existsSync(oldImageFullPath)) {
            fs.unlinkSync(oldImageFullPath);
        }

        return imageUtils.addImageInPublic(folderName, subFolderName, file);
    },
};

module.exports = imageUtils;

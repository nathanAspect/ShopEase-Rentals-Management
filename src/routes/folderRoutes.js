const express = require('express');
const { folderControllers: { createFolder, getFolder, getFolderShops, getFolders, updateFolder, deleteFolder} } = require('../controllers')
const router = express.Router();

router.post('/', createFolder);
router.get('/:folderId', getFolder);
router.get('/shops/:folderId', getFolderShops);
router.get('/', getFolders);
router.put('/:folderId', updateFolder);
router.delete('/:folderId', deleteFolder);

module.exports = router;
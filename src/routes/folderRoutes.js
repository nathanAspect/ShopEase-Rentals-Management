const express = require('express');
const { folderControllers: { createFolder, getFolder, getFolders, updateFolder, deleteFolder} } = require('../controllers')
const router = express.Router();

router.post('/', createFolder);
router.get('/:folderId', getFolder);
router.get('/', getFolders);
router.put('/:folderId', updateFolder);
router.delete('/:folderId', deleteFolder);

module.exports = router;
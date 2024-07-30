const express = require('express');
const router = express.Router();

const bookmarksController = require('../controllers/bookmarksControllers');
const auth = require('../middleware/auth');

router.post('/addBookmarks', auth, bookmarksController.addOrRemoveBookmarks);
router.get('/getBookmarks', auth, bookmarksController.getBookmarksByUserId);

module.exports = router;
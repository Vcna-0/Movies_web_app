const BookmarkModel = require('../models/BookmarksModel');

exports.addOrRemoveBookmarks = async (req, res, next) => {
    const userId = req.auth.userId;
    const { idMedia, mediaType } = req.body;

    try {
        const existingBookmark = await BookmarkModel.findOne({ userId, movieId: idMedia });

        if (existingBookmark) {
            await BookmarkModel.deleteOne({ _id: existingBookmark._id });
            return res.status(200).send('Bookmark removed');
        } else {
            const newBookmark = new BookmarkModel({ userId, movieId: idMedia, mediaType });
            await newBookmark.save();
            return res.status(200).send('Bookmark added');
        }
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getBookmarksByUserId = async (req, res) => {
    const userId = req.auth?.userId;
    if (!userId) {
        return res.status(401).json({ error: 'User not authenticated' });
    }
   try {
      const bookmarks = await BookmarkModel.find({ userId });
      return res.status(200).json(bookmarks);
   } 
   catch (error) {
      return res.status(400).json({
         error: error.message,
         message: 'Unable to retrieve bookmarks from the database',
      })
   }
};
  
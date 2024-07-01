const BookmarkModel = require('../models/BookmarksModel');

exports.add = async (req, res, next) => {
    const userId = req.auth.userId;
    const { idMedia } = req.body;

    try {
        const existingBookmark = await BookmarkModel.findOne({ userId, movieId: idMedia });

        if (existingBookmark) {
            await BookmarkModel.deleteOne({ _id: existingBookmark._id });
            return res.status(200).send('Bookmark removed');
        } else {
            const newBookmark = new BookmarkModel({ userId, movieId: idMedia });
            await newBookmark.save();
            return res.status(200).send('Bookmark added');
        }
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.get = async (req, res) => {
   try {
      const bookmarks = await BookmarkModel.find({ CurrentUserId: req.auth.userId });
      return res.status(200).json(bookmarks);
   } 
   catch (error) {
      return res.status(400).json({
         error: error.message,
         message: 'Unable to retrieve bookmarks from the database',
      })
   }
};
  
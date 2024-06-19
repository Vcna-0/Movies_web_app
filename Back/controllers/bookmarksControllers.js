const bookmarksModel = require('../models/BookmarksModel');

exports.add = (req, res, next) => {
  let CurrentUserId = req.auth.userId;
  let bookmarkedId = req.body.bookmarked};
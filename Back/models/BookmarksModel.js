const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookmarkSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    movieId: { type: String, required: true },
    mediaType: { type: String, required: true },
    addAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('BookmarkModel', bookmarkSchema);
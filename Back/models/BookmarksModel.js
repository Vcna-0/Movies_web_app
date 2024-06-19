const mongoose= require('mongoose');

const BookmarksSchema = new mongoose.Schema({
  userId: {type: String,required: true,},
  bookmarked: {type: Array},
}); 

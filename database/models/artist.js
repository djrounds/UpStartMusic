const mongoose = require('mongoose');
const AlbumSchema = require('./album');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,  // https://www.npmjs.com/package/mongoose-type-url
    genre: String, // enum or array of String
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    Albums: [AlbumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);
module.exports(Artist);

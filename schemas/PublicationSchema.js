const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublicationSchema = new Schema({
    article: { type: String, trim: true },
    user: {type:String},
}, { timestamps: true });

var Publication = mongoose.model('publication', PublicationSchema);
module.exports = Publication;
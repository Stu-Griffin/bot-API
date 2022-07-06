import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SavedDataSchema = new Schema({
	date: { type: Date, default: Date.now },
	binance: { type: Number, required: true },
	advcash: { type: Number, required: true },
	result: { type: Number, required: true }
});

const SavedDataModel = mongoose.model('Saved-data-from-bot', SavedDataSchema);

export default SavedDataModel;
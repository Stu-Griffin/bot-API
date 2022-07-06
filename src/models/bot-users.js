import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	chatId: { type: Number, required: true },
    firstName: { type: String, required: true },
    username: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('Bot-users', UserSchema);

export default UserModel;
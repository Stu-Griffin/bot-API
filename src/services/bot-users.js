import UserSchema from '../models/bot-users.js';

class UserServices {
    async findAllUsers() {
        const result = await UserSchema.find();
        return result;
    }
    async findOneUser(id) {
        const result = await UserSchema.findOne({_id: id});
        return result;
    }
    async createOneUser(user) {
        const result = await UserSchema.create(user);
        return result;
    }
    async removeOneUser(id) {
        const result = await UserSchema.deleteOne({_id: id});
        return result;
    }
}

export default UserServices;
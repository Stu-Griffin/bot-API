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
    async registerUpUser(user) {
        const {chatId, firstName, username} = user;
        const result = await UserModel.findOne({chatId: chatId});
        if (result) {
            return({
                status: 404,
                message: `User ${firstName} with chat id: ${chatId} allready existed`
            });
        }
        await UserModel.create(user);
        return({
            status: 200,
            message: 'User was created'
        });
    }
    async removeOneUser(id) {
        const result = await UserSchema.deleteOne({_id: id});
        return result;
    }
}

export default UserServices;
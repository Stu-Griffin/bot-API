import UserServices from "../services/bot-users.js";
import tryCatchMiddleware from "../middleware/index.js";

export class UserController {
    constructor(userServices) {
		this.userServices = userServices
	}
    async getAllUsers(req, res) {
        tryCatchMiddleware(req, res, this.userServices.findAllUsers());
    }
    async getOneUser(req, res) {
        tryCatchMiddleware(req, res, this.userServices.findOneUser(req.params.id));
    }
    async signUpUser(req, res) {
        tryCatchMiddleware(req, res, this.userServices.registerUpUser({
            chatId: req.body.chatId,
            firstName: req.body.firstName,
            username: req.body.username
        }));
    }
    async deleteOneUser(req, res) {
        tryCatchMiddleware(req, res, this.userServices.removeOneUser(req.params.id));
    }
}

const userController = new UserController(new UserServices());

export default userController;
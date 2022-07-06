import tryCatchMiddleware from "../middleware/index.js";
import SavedDataServices from "../services/saved-data.js";

export class SavedDataController {
    constructor(savedDataServices) {
		this.savedDataServices = savedDataServices
	}
    async getAllData(req, res) {
        tryCatchMiddleware(req, res, this.savedDataServices.findAllData());
    }
    async getOneData(req, res) {
        tryCatchMiddleware(req, res, this.savedDataServices.findOneData(req.params.id));
    }
    async postOneData(req, res) {
        tryCatchMiddleware(req, res, this.savedDataServices.createOneData({
            binance: req.body.binance,
            advcash: req.body.advcash,
            result: req.body.result
        }));
    }
    async deleteOneData(req, res) {
        tryCatchMiddleware(req, res, this.savedDataServices.removeOneData(req.params.id));
    }
}

const savedDataController = new SavedDataController(new SavedDataServices());

export default savedDataController;
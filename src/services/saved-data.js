import SavedDataSchema from '../models/saved-data.js';

class SavedDataServices {
    async findAllData() {
        const result = await SavedDataSchema.find();
        return result;
    }
    async findOneData(id) {
        const result = await SavedDataSchema.findOne({_id: id});
        return result;
    }
    async createOneData(savedData) {
        const result = await SavedDataSchema.create(savedData);
        return result;
    }
    async removeOneData(id) {
        const result = await SavedDataSchema.deleteOne({_id: id});
        return result;
    }
}

export default SavedDataServices;
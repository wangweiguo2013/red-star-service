import ImageModel from '../models/Image'

class ImageService {
    constructor(){
        //todo::不能同步表结构修改
        ImageModel.sync()
    }
    async create(imgInfo){
        const userRecord = await ImageModel.create(imgInfo)
        return userRecord
    }
}

export default new ImageService()
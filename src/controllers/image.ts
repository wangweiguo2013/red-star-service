/** @format */

import ImageService from '../services/image'
import * as fs from 'fs'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid';
import config from '../config'
import { IMAGE_ERR_CODE } from '../config/errCode'

const isOnline = process.env.NODE_ENV === 'production'

function saveFile(file, name) {
    const reader = fs.createReadStream(file.path)
    const streamPath = isOnline 
        ? path.resolve(config.image_path_online, name) 
        : path.resolve(__dirname,  config.image_path, name)
    const writer = fs.createWriteStream(streamPath)

    return new Promise((resolve, reject) => {
        reader.pipe(writer)

        reader.on('end', () => {
            resolve(true)
        })

        reader.on('error', err => {
            reject(err)
        })
    })
}

function getSuffix(name){
   const str = name.split('.')
   return str[str.length - 1]
}

class ImageController {
    async upload(ctx) {
        const {file} = ctx.request.files
        const {name, type, size} = file
        const MAX_FILE_SIZE = 1024 * 1024 * 2 //不超过2M
        if(size > MAX_FILE_SIZE) {
            return ctx.sendResponse({...IMAGE_ERR_CODE.EXCEED_MAX_SIZE})
        }
        const suffix = getSuffix(name)
        const fileName = uuidv4() + '.' + suffix
        try{
            
        await saveFile(file, fileName)
        const fileData = {
            origin_name: name,
            file_name: fileName,
            file_size: size,
            file_type: type,
        }
        const imageInfo = await ImageService.create(fileData)
        ctx.sendResponse({
            code: 200,
            data: {
                name: imageInfo.getDataValue('file_name'),
                image_url: config.image_path_url + fileName
            }
        })

    }catch(err){

    }
    }
}

export default new ImageController()

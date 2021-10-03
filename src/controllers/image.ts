/** @format */

import ImageService from '../services/image'
import * as fs from 'fs'
import * as path from 'path'

function saveFile(file, name) {
    const reader = fs.createReadStream(file.path)
    const writer = fs.createWriteStream(
        // 文件上传到 image 文件夹中
        path.resolve(__dirname, '../../image', name),
    )

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

class ImageController {
    async upload(ctx) {
        const {file} = ctx.request.files
        const {name, type, size} = file
        const fileName = Math.random().toString(16).slice(2) + '.png'
        await saveFile(file, fileName)
        const fileData = {
            origin_name: name,
            file_name: fileName,
            file_size: size,
            file_type: type,
        }
        const imageInfo = await ImageService.create(fileData)
        ctx.body = {
            code: 200,
            data: imageInfo,
        }
    }
}

export default new ImageController()

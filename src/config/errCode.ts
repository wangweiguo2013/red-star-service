/** @format */

interface ErrCode {
    code: number
    msg: string
}
export const PAGE_ERR_CODE: Record<string, ErrCode> = {
    DEL_NOT_EXIST_ERROR: {
        code: 800100,
        msg: '无此数据，删除失败',
    },
    RESTORE_NOT_DELETED: {
        code: 800101,
        msg: '未找到数据，恢复失败',
    },
}

import axios from '@/config/httpConfig'
// 修改禁用和锁定状态
export function updatedisablestatus(data) {
    return axios.yuekejuPost('/v1/manage/user/updateDisableAndLock', data)
}
// 查询用户信息
export function findByUser(data) {
    return axios.yuekejuGet('/v1/manage/user/findUserAllBySearch', data)
}

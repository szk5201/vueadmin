import axios from '@/config/httpConfig'
// 查询组织机构table
export function findSearchDept(data) {
    return axios.yuekejuGet('/v1/yuekejuDept/findSearchAll', data)
}
// 新增/修改组织机构
export function insertDept(data) {
    return axios.yuekejuPost('/v1/yuekejuDept/insertDept', data)
}
// 删除组织机构
export function deleteDept(data) {
    return axios.yuekejuPost('/v1/yuekejuDept/deleteDept', data)
}
// 查询组织机构树
export function findSearchDeptTree(data) {
    return axios.yuekejuGet('/v1/yuekejuDept/findSearchAllTree', data)
}
// 验证重复
export function isRepeat(data) {
    console.log(data)
    return axios.yuekejuGet('/v1/yuekejuDept/isRepeat', data)
}

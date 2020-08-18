import axios from '@/config/httpConfig'

export function fetchPermission() {
    return axios.get('/api/user/info')
}

// 获取用户列表
export function getUserList() {
    return axios.get('/api/user/list')
}
// 获取角色列表
export function getRoleList() {
    return axios.get('/api/role/list')
}
// 获取所有权限
export function getAllPermissiion() {
    return axios.get('/api/permission/all')
}
// 获取一级权限列表
export function getFirstLevel() {
    return axios.get('/api/permission/resource')
}
// 获取次级权限列表
export function getNextLevel(id) {
    return axios.get(`/api/permission/level?id=${id}`)
}
export function login(data) {
    return axios.post('/api/user/login', data)
}
export function insertRole(data) {
    return axios.yuekejuPost('/v1/yuekejuRole/insertRole', data)
}
export function findAllBySearchRole(data) {
    return axios.yuekejuGet('/v1/yuekejuRole/findAllBySearch', data)
}
export function findMenuAll() {
    return axios.yuekejuGet('/v1/yuekejuPermission/findAllPermission')
}
export function findAllByMenu() {
    return axios.yuekejuGet('/v1/yuekejuPermission/findByMenuPermission')
}
export function findByCode(data) {
    return axios.yuekejuGet('/v1/yuekejuPermission/findByCode/' + data)
}
export function insertPermission(data) {
    return axios.yuekejuPost('/v1/yuekejuPermission/insertPermission', data)
}
export function deletePermission(data) {
    return axios.yuekejuPost('/v1/yuekejuPermission/deletePermission', data)
}

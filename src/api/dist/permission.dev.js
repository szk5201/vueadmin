"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPermission = fetchPermission;
exports.getUserList = getUserList;
exports.getRoleList = getRoleList;
exports.getAllPermissiion = getAllPermissiion;
exports.getFirstLevel = getFirstLevel;
exports.getNextLevel = getNextLevel;
exports.login = login;
exports.insertRole = insertRole;
exports.findAllBySearchRole = findAllBySearchRole;
exports.findMenuAll = findMenuAll;
exports.findAllByMenu = findAllByMenu;
exports.findByCode = findByCode;
exports.insertPermission = insertPermission;
exports.deletePermission = deletePermission;
exports.findByUser = findByUser;

var _httpConfig = _interopRequireDefault(require("@/config/httpConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fetchPermission() {
  return _httpConfig["default"].get('/api/user/info');
} // 获取用户列表


function getUserList() {
  return _httpConfig["default"].get('/api/user/list');
} // 获取角色列表


function getRoleList() {
  return _httpConfig["default"].get('/api/role/list');
} // 获取所有权限


function getAllPermissiion() {
  return _httpConfig["default"].get('/api/permission/all');
} // 获取一级权限列表


function getFirstLevel() {
  return _httpConfig["default"].get('/api/permission/resource');
} // 获取次级权限列表


function getNextLevel(id) {
  return _httpConfig["default"].get("/api/permission/level?id=".concat(id));
}

function login(data) {
  return _httpConfig["default"].post('/api/user/login', data);
}

function insertRole(data) {
  return _httpConfig["default"].yuekejuPost('/v1/yuekejuRole/insertRole', data);
}

function findAllBySearchRole(data) {
  return _httpConfig["default"].yuekejuGet('/v1/yuekejuRole/findAllBySearch', data);
}

function findMenuAll() {
  return _httpConfig["default"].yuekejuGet('/v1/yuekejuPermission/findAllPermission');
}

function findAllByMenu() {
  return _httpConfig["default"].yuekejuGet('/v1/yuekejuPermission/findByMenuPermission');
}

function findByCode(data) {
  return _httpConfig["default"].yuekejuGet('/v1/yuekejuPermission/findByCode/' + data);
}

function insertPermission(data) {
  return _httpConfig["default"].yuekejuPost('/v1/yuekejuPermission/insertPermission', data);
}

function deletePermission(data) {
  return _httpConfig["default"].yuekejuPost('/v1/yuekejuPermission/deletePermission', data);
}

function findByUser(data) {
  return _httpConfig["default"].yuekejuGet('/v1//manage/user/findUserAllBySearch');
}
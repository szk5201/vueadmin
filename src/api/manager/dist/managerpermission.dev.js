"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatedisablestatus = updatedisablestatus;
exports.findByUser = findByUser;

var _httpConfig = _interopRequireDefault(require("@/config/httpConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 修改禁用和锁定状态
function updatedisablestatus(data) {
  return _httpConfig["default"].yuekejuPost('/v1/manage/user/updateDisableAndLock', data);
} // 查询用户信息


function findByUser(data) {
  return _httpConfig["default"].yuekejuGet('/v1/manage/user/findUserAllBySearch', data);
}
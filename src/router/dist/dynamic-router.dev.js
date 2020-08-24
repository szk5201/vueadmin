"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* 订单管理 */
var Order = function Order() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/order-manage'));
  });
};

var OrderList = function OrderList() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/order-manage/order-list'));
  });
};

var ProductManage = function ProductManage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/order-manage/product-manage'));
  });
};

var ProductionList = function ProductionList() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/order-manage/product-manage/production-list'));
  });
};

var ReviewManage = function ReviewManage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/order-manage/product-manage/review-manage'));
  });
};

var ReturnGoods = function ReturnGoods() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/order-manage/return-goods'));
  });
};
/* 产品管理 */


var Goods = function Goods() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/goods-manage'));
  });
};

var GoodsList = function GoodsList() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/goods-manage/goods-list'));
  });
};

var GoodsClassify = function GoodsClassify() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/goods-manage/goods-classify'));
  });
}; // 权限管理


var Permission = function Permission() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/permission'));
  });
};

var UserManage = function UserManage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/permission/user-manage'));
  });
};

var RoleManage = function RoleManage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/permission/role-manage'));
  });
};

var YuekejuRoleManage = function YuekejuRoleManage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/yuekeju-sys-manager/role/role_manage'));
  });
};

var MenuManage = function MenuManage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/permission/menu-manage'));
  });
};

var menu_manage = function menu_manage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/yuekeju-sys-manager/menu/menu_manage'));
  });
};

var managerSysUser = function managerSysUser() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('@/pages/yuekeju-sys-manager/manager-user/managerSysUser'));
  });
};
/* 需要权限判断的路由 */


var dynamicRoutes = [{
  path: '/order',
  component: Order,
  name: 'order-manage',
  meta: {
    name: '订单管理',
    icon: 'example'
  },
  children: [{
    path: 'list',
    name: 'order-list',
    component: OrderList,
    meta: {
      name: '订单列表',
      icon: 'table'
    }
  }, {
    path: 'product',
    name: 'product-manage',
    component: ProductManage,
    meta: {
      name: '生产管理',
      icon: 'user'
    },
    children: [{
      path: 'list',
      name: 'product-list',
      component: ProductionList,
      meta: {
        name: '生产列表',
        icon: 'table'
      }
    }, {
      path: 'review',
      name: 'review-manage',
      component: ReviewManage,
      meta: {
        name: '审核管理',
        icon: 'eye'
      }
    }]
  }, {
    path: 'returnGoods',
    name: 'return-goods',
    component: ReturnGoods,
    meta: {
      name: '退货管理',
      icon: 'nested'
    }
  }]
}, {
  path: '/goods',
  component: Goods,
  name: 'goods',
  meta: {
    name: '产品管理',
    icon: 'user'
  },
  children: [{
    path: 'list',
    name: 'goods-list',
    component: GoodsList,
    meta: {
      name: '产品列表',
      icon: 'table'
    }
  }, {
    path: 'classify',
    name: 'goods-classify',
    component: GoodsClassify,
    meta: {
      name: '产品分类',
      icon: 'tree'
    }
  }]
}, {
  path: '/permission',
  component: Permission,
  name: 'permission',
  meta: {
    name: '权限管理',
    icon: 'table'
  },
  children: [{
    path: 'user',
    name: 'user-manage',
    component: UserManage,
    meta: {
      name: '用户管理',
      icon: 'table'
    }
  }, {
    path: 'role',
    name: 'role-manage',
    component: RoleManage,
    meta: {
      name: '角色管理',
      icon: 'eye'
    }
  }, {
    path: 'yuekeju-role-manage',
    name: 'yuekeju-role-manage',
    component: YuekejuRoleManage,
    meta: {
      name: '角色管理1',
      icon: 'eye'
    }
  }, {
    path: 'menu',
    name: 'menu-manage',
    component: MenuManage,
    meta: {
      name: '菜单管理',
      icon: 'tree'
    }
  }, {
    path: 'menu_manage',
    name: 'menu_manage',
    component: menu_manage,
    meta: {
      name: '菜单管理1',
      icon: 'tree'
    }
  }, {
    path: 'managerSysUser',
    name: 'managerSysUser',
    component: managerSysUser,
    meta: {
      name: '管理员管理',
      icon: 'tree'
    }
  }]
}];
var _default = dynamicRoutes;
exports["default"] = _default;
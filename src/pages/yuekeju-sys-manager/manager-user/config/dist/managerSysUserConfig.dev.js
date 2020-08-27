"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  managerSysUserConfig: {
    tableColumnConfig: [//  type: seq 序号  checkbox复选框 radio单选框 expand展开行
    {
      type: 'seq',
      width: 60
    }, {
      type: 'checkbox',
      width: 60
    }, {
      field: 'loginName',
      title: '登录名'
    }, {
      field: 'name',
      title: '名称',
      sortable: true
    }, {
      field: 'sex',
      title: '性别'
    }, {
      field: 'userNumber',
      title: '用户号',
      sortable: true
    }, {
      field: 'userLockStatus',
      title: '锁定状态'
    }, {
      field: 'createTime',
      title: '创建时间'
    }, {
      field: 'creater',
      title: '创建人'
    }, {
      field: 'updateTime',
      title: '修改时间'
    }, {
      field: 'modified',
      title: '修改人'
    }, {
      field: 'disableStatus',
      title: '状态',
      cellRender: {
        name: '$switch',
        events: {
          change: function change() {}
        }
      }
    }],
    tableFormConfig: [{
      field: 'name',
      title: '名称',
      itemRender: {
        name: 'input',
        attrs: {
          placeholder: '请输入名称'
        }
      }
    }, {
      field: 'userLockStatus',
      title: '锁定状态',
      itemRender: {
        name: 'select',
        options: [{
          key: '',
          value: {
            value: ''
          },
          label: ''
        }, {
          key: '0',
          value: {
            value: '0'
          },
          label: '未锁定'
        }, {
          key: '1',
          value: {
            value: '1'
          },
          label: '锁定'
        }]
      }
    }, {
      itemRender: {
        name: '$button',
        props: {
          content: '查询',
          type: 'submit',
          status: 'primary'
        }
      }
    }, {
      itemRender: {
        name: '$button',
        props: {
          content: '重置',
          type: 'reset'
        }
      }
    }]
  }
};
exports["default"] = _default;
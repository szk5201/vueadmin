"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  // 表字段配置
  tableColumnConfig: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  // 表from表单配置
  tableFormConfig: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  // 按钮配置
  tableToolBarButton: {
    type: Array,
    "default": function _default() {
      return [{
        code: 'add_actived',
        name: '新增',
        status: 'primary',
        icon: 'fa fa-plus',
        visible: true
      }, {
        code: 'update_actived',
        name: '修改',
        status: 'warning',
        icon: 'fa fa-plus',
        visible: true
      }, {
        code: 'delete_actived',
        name: '删除',
        status: 'danger',
        icon: 'fa fa-plus',
        visible: true
      }];
    }
  },
  // table数据
  tableData: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  // 是否开启边框
  border: {
    type: String,
    "default": function _default() {
      return 'default';
    }
  },
  // 对齐方式
  align: {
    type: String,
    "default": function _default() {
      return 'center';
    }
  },
  // 头部对其
  headerAlign: {
    type: String,
    "default": function _default() {
      return 'center';
    }
  },
  // 是否显示表头
  showHeader: {
    type: Boolean,
    "default": function _default() {
      return true;
    }
  },
  // 是否要高亮当前行
  highlightCurrentRow: {
    type: Boolean,
    "default": function _default() {
      return true;
    }
  },
  // 鼠标移到行是否要高亮显示
  highlighthoverRow: {
    type: Boolean,
    "default": function _default() {
      return true;
    }
  },
  // 高度
  height: {
    type: String,
    "default": function _default() {
      return '100%';
    }
  },
  // ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）
  showOverflow: {
    type: String,
    "default": function _default() {
      return 'title';
    }
  },
  // 设置表尾所有内容过长时显示为省略号
  showFooterOverflow: {
    type: String,
    "default": function _default() {
      return 'title';
    }
  },
  // 设置表头所有内容过长时显示为省略号
  showHeaderOverflow: {
    type: String,
    "default": function _default() {
      return 'title';
    }
  },
  // 自动监听父元素的变化去重新计算表格 （对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
  autoResize: {
    type: Boolean,
    "default": function _default() {
      return true;
    }
  },
  // 排序配置项
  sortConfig: {
    type: Object,
    "default": function _default() {}
  },
  // 序号配置项
  seqConfig: {
    type: Object,
    "default": function _default() {
      var object = {
        startIndex: 1,
        seqMethod: this.seqMethod
      };
      return object;
    }
  },
  // 筛选配置项
  filterConfig: {
    type: Object,
    "default": function _default() {}
  },
  // 导出
  exportConfig: {
    type: Object,
    "default": function _default() {
      return _data["default"].tableGlobalConfigIn.exportConfig;
    }
  },
  // 导入
  importConfig: {
    type: Object,
    "default": function _default() {}
  },
  tooltipConfig: {
    type: Object,
    defalut: function defalut() {
      return _data["default"].tableGlobalConfigIn.tooltipConfig;
    }
  },
  // 分页
  pagerConfig: {
    type: Object,
    "default": function _default() {
      return _data["default"].tableGlobalConfigIn.tablePage;
    }
  },
  // 快捷菜单配置项
  contextMenu: {
    type: Object,
    "default": function _default() {}
  },
  // 按键配置项
  keyboardConfig: {
    type: Object,
    "default": function _default() {}
  },
  // 可编辑配置项
  editConfig: {
    type: Object,
    "default": function _default() {}
  },
  // 校验配置项
  validConfig: {
    type: Object,
    "default": function _default() {}
  },
  // 校验规则配置项
  editRules: {
    type: Object,
    "default": function _default() {}
  },
  animat: {
    type: Boolean,
    defalut: true
  },
  // 缩放配置项
  zoomConfig: {
    type: Object,
    defalut: {
      escRestore: true
    }
  },
  refname: {
    type: String,
    "default": function _default() {
      return '';
    }
  },
  "export": {
    type: Boolean,
    "default": function _default() {
      return true;
    }
  },
  custom: {
    type: Boolean,
    "default": function _default() {
      return true;
    }
  },
  refresh: {
    "default": function _default() {
      return true;
    }
  },
  "import": {
    "default": function _default() {
      return true;
    }
  },
  loading: {
    type: Boolean,
    "default": function _default() {
      return false;
    }
  },
  keepSource: {
    type: Boolean,
    "default": function _default() {
      return false;
    }
  },
  total: {
    type: Number,
    "default": function _default() {
      return 0;
    }
  },
  tableFormData: {
    type: Object,
    "default": function _default() {}
  }
};
exports["default"] = _default2;
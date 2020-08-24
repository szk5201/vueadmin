"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  tableGlobalConfigIn: {
    exportConfig: {
      // 默认导出配置
      original: false,
      // 是否导出数据源
      mode: 'current',
      // 模式当前显示
      type: 'xlsx',
      types: ['csv', 'xlsx'],
      columnFilterMethod: function columnFilterMethod(column, $columnIndex, ColumnConfigs) {
        // 导出过滤
        return column.type !== 'checkbox';
      }
    },
    tooltipConfig: {
      // toolTip配置
      enabled: false,
      theme: 'dark',
      // dark, light,
      enterable: false,
      leaveDelay: 300,
      contentMethod: function contentMethod(_ref) {
        var items = _ref.items,
            row = _ref.row,
            rowIndex = _ref.rowIndex,
            $rowIndex = _ref.$rowIndex,
            column = _ref.column,
            columnIndex = _ref.columnIndex,
            $columnIndex = _ref.$columnIndex,
            type = _ref.type,
            cell = _ref.cell,
            $event = _ref.$event;

        if (row && column.property && column.editRender && column.editRender.name === '$treeinput' && row[column.property]) {
          var treeArr = row[column.property].split('##');
          var code = treeArr[1] === ' ' || !treeArr[1] ? '' : treeArr[1];
          var name = treeArr[2] === ' ' || !treeArr[2] ? '' : treeArr[2];
          return name ? "".concat(code, "-").concat(name) : '';
        }

        if (row && column.property) {
          return row[column.property] && row[column.property].toString().length > 8 ? row[column.property] || cell.innerText : '';
        } else {
          return column.own.title.length > 8 ? column.own.title : '';
        }
      }
    },
    tablePage: {
      total: 0,
      currentPage: 1,
      pageSize: 20,
      align: 'left',
      pageSizes: [20, 50, 100, 200, 500, 1000, 5000],
      layouts: ['Sizes', 'PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'FullJump', 'Total'],
      perfect: true
    }
  }
};
exports["default"] = _default;
import tableGlobalConfigIn from './data.js'
export default {
    // 表字段配置
    tableColumnConfig: {
        type: Array,
        default: () => []
    },
    // 表from表单配置
    tableFormConfig: {
        type: Array,
        default: () => []
    },
    // 按钮配置
    tableToolBarButton: {
        type: Array,
        default: () => [
            { code: 'add_actived', name: '新增', status: 'primary', icon: 'fa fa-plus', visible: true },
            { code: 'update_actived', name: '修改', status: 'warning', icon: 'fa fa-plus', visible: true },
            { code: 'delete_actived', name: '删除', status: 'danger', icon: 'fa fa-plus', visible: true }
        ]
    },
    // table数据
    tableData: {
        type: Array,
        default: () => []
    },
    // 是否开启边框
    border: {
        type: String,
        default: () => 'default'
    },
    // 对齐方式
    align: {
        type: String,
        default: () => 'center'
    },
    // 头部对其
    headerAlign: {
        type: String,
        default: () => 'center'
    },
    // 是否显示表头
    showHeader: {
        type: Boolean,
        default: () => true
    },
    // 是否要高亮当前行
    highlightCurrentRow: {
        type: Boolean,
        default: () => true
    },
    // 鼠标移到行是否要高亮显示
    highlighthoverRow: {
        type: Boolean,
        default: () => true
    },
    // 高度
    height: {
        type: [String],
        default () {
            return '100%'
        }
        // calc(70vh - 100 px)
    },
    // ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）
    showOverflow: {
        type: String,
        default: () => 'title'
    },
    // 设置表尾所有内容过长时显示为省略号
    showFooterOverflow: {
        type: String,
        default: () => 'title'
    },
    // 设置表头所有内容过长时显示为省略号
    showHeaderOverflow: {
        type: String,
        default: () => 'title'
    },
    // 自动监听父元素的变化去重新计算表格 （对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
    autoResize: {
        type: Boolean,
        default: () => true
    },
    // 排序配置项
    sortConfig: {
        type: Object,
        default: () => { }
    },
    // 序号配置项
    seqConfig: {
        type: Object,
        default: function () {
            let object = { startIndex: 1, seqMethod: this.seqMethod }
            return object
        }
    },
    // 筛选配置项
    filterConfig: {
        type: Object,
        default: () => { }
    },
    // 导出
    exportConfig: {
        type: Object,
        default: function () {
            return tableGlobalConfigIn.tableGlobalConfigIn.exportConfig
        }
    },
    // 导入
    importConfig: {
        type: Object,
        default: () => { }
    },
    tooltipConfig: {
        type: Object,
        defalut: function () {
            return tableGlobalConfigIn.tableGlobalConfigIn.tooltipConfig
        }
    },
    // 分页
    pagerConfig: {
        type: Object,
        default: function () {
            return tableGlobalConfigIn.tableGlobalConfigIn.tablePage
        }
    },
    // 快捷菜单配置项
    contextMenu: {
        type: Object,
        default: () => { }
    },
    // 按键配置项
    keyboardConfig: {
        type: Object,
        default: () => { }
    },
    // 可编辑配置项
    editConfig: {
        type: Object,
        default: () => { }
    },
    // 校验配置项
    validConfig: {
        type: Object,
        default: () => { }
    },
    // 校验规则配置项
    editRules: {
        type: Object,
        default: () => { }
    },
    animat: {
        type: Boolean,
        defalut: true
    },
    // 缩放配置项
    zoomConfig: {
        type: Object,
        defalut: { escRestore: true }
    },
    refname: {
        type: String,
        default: () => ''
    },
    export: {
        type: Boolean,
        default: () => true
    },
    custom: {
        type: Boolean,
        default: () => true
    },
    refresh: {
        default: () => true
    },
    import: {
        default: () => true
    },
    loading: {
        type: Boolean,
        default: () => false

    },
    keepSource: {
        type: Boolean,
        default: () => false
    },
    total: {
        type: Number,
        default: () => 0
    },
    tableFormData: {
        type: Object,
        default: () => { }
    },
    stripe: {
        default: () => true
    },
    headerRowClassName: {
        default: () => 'tableTitleVxeDefault'
    }
}

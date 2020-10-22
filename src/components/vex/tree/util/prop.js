export default {
    data: {
        type: Array,
        default: () => []
    },
    defaultProps: {
        type: Object,
        default: () => {}
    },
    emptyText: {
        type: String,
        default: () => '组织机构暂无数据'
    },
    nodeKey: {
        type: String,
        defalut: () => 'yuekejuCode'
    }

}


const util = {

}

const initMethod = {

}
const initEven = {

}

const pageHandle = {
    handlePageChange({ currentPage, pageSize }) {
        // 分页改变事件
        this.tablePage.currentPage = currentPage
        this.tablePage.pageSize = pageSize
        this.loadData()
    },
    loadData() {
    // 加载数据
        let self = this
        let searchParams = {
            currentPage: this.tablePage.currentPage,
            pageSize: this.tablePage.pageSize
        }
        self.$emit('loadtable', searchParams, this)
    },
    getTableObj() {
        let obj = null
        obj = this.$ref.refname
        return obj
    }
}
export default {
    ...util,
    ...initMethod,
    ...pageHandle,
    ...initEven
}

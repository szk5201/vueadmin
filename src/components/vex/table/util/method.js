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
            currentPage: this.pagerConfigIn.currentPage,
            pageSize: this.pagerConfigIn.pageSize
        }
        self.$emit('loadTable', searchParams, this)
    }
}
export default {
    ...util,
    ...initMethod,
    ...pageHandle,
    ...initEven
}

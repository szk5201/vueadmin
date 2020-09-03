<template>
  <basTable
  :tableColumnConfig="tableColumnConfig"
  :tableData="tableData"
  :loading="loading"
  :border="border"
  :tableFormConfig="tableFormConfig"
  :tableToolBarButton="tableToolBar"
  :total="pageTable.total"
  :tableFormData="formTableData"
  @loadtable="loadtable"
  @formReset="reset"
  @formSubmit="formSubmit"
  @insertClick="insertClick"
  ref="reftable"
  />
</template>
<script>
import configSysUser from './config/managerSysUserConfig.js'
import { findByUser, updatedisablestatus } from '@/api/manager/managerpermission'
export default {
    data() {
        return {
            tableColumnConfig: [
            //  type: seq 序号  checkbox复选框 radio单选框 expand展开行
                { type: 'seq', width: 60 },
                { type: 'checkbox', width: 60 },
                { field: 'loginName', title: '登录名' },
                { field: 'name', title: '名称', sortable: true },
                { field: 'sex', title: '性别' },
                { field: 'userNumber', title: '用户号', sortable: true },
                { field: 'userLockStatus', title: '锁定状态', formatter: this.userLockStatus },
                { field: 'createTime', title: '创建时间' },
                { field: 'creater', title: '创建人' },
                { field: 'updateTime', title: '修改时间' },
                { field: 'modified', title: '修改人' },
                { field: 'userDisableStatus', title: '禁用/启用', cellRender: { name: '$switch', events: { change: this.disableChanageEvent } } }
            ],
            tableData: [],
            height: '100%',
            loading: false,
            border: 'default',
            ref: 'basTable',
            tableFormConfig: configSysUser.managerSysUserConfig.tableFormConfig,
            tableToolBar: configSysUser.managerSysUserConfig.button,
            pageTable: {
                params: {
                    currentPage: 1,
                    pageSize: 20,
                    disableStatus: null,
                    yuekejuCode: null
                }
            },
            formTableData: {
                userLockStatus: '',
                name: ''
            }

        }
    },
    created: function() {

    },
    mounted() {
        this.init()
    },
    methods: {
        disableChanageEvent: function({ column, data }) {
            let params = {
                yuekejuCode: data[0].yuekejuCode

            }
            if (data[0].userDisableStatus) {
                params.disableStatus = 1
            } else {
                params.disableStatus = 0
            }
            updatedisablestatus(params).then(res => {
                console.log(res)
                this.init()
            })
        },
        init() {
            let that = this
            findByUser(this.pageTable).then(res => {
                that.tableData = res
                this.$refs.reftable.tablePage.total = 10
            })
        },
        loadtable: function (obj, self) {
            this.pageTable.params.currentPage = obj.currentPage
            this.pageTable.params.pageSize = obj.pageSize
            this.init()
        },
        reset: function(data, e) {
            this.pageTable.params.currentPage = 1
            this.pageTable.params.disableStatus = null
            this.pageTable.params.yuekejuCode = null
            this.init()
        },
        formSubmit: function(data, e) {
            if (typeof (data.data.name) === 'undefined' || data.data.name === null || data.data.name === '') {
                this.pageTable.params.yuekejuCode = null
            } else {
                this.pageTable.params.yuekejuCode = data.data.name
            }
            if (typeof (data.data.userLockStatus) === 'undefined' || data.data.userLockStatus === null || data.data.userLockStatus === '') {
                this.pageTable.params.disableStatus = null
            } else {
                this.pageTable.params.disableStatus = data.data.userLockStatus
            }
            this.init()
        },
        insertClick: function() {
            this.$router.push({ path: 'insertmanagersysuser', params: {} })
        },
        userLockStatus: function(cellValue) {
            if (cellValue.cellValue === 0) {
                return '锁定'
            } else if (cellValue.cellValue === 1) {
                return '未锁定'
            }
        }
    }
}
</script>
<style>
</style>

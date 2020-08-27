<template>
  <basTable
  :tableColumnConfig="tableColumnConfig"
  :tableData="tableData"
  :loading="loading"
  :border="border"
  :refname="ref"
  :tableFormConfig="tableFormConfig"
  :tableToolBarButton="tableToolBar"
  />
</template>
<script>
import configSysUser from './config/managerSysUserConfig.js'
import { findByUser } from '@/api/permission'
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
                { field: 'userLockStatus', title: '锁定状态' },
                { field: 'createTime', title: '创建时间' },
                { field: 'creater', title: '创建人' },
                { field: 'updateTime', title: '修改时间' },
                { field: 'modified', title: '修改人' },
                { field: 'disableStatus', title: '状态', cellRender: { name: '$switch', events: { change: this.disableChanageEvent } } }
            ],
            tableData: [],
            height: '100%',
            loading: false,
            border: 'default',
            ref: 'basTable',
            tableFormConfig: configSysUser.managerSysUserConfig.tableFormConfig,
            tableToolBar: configSysUser.managerSysUserConfig.button
        }
    },
    created: function() {
        this.init()
    },
    // mounted() {

    // }
    // ,
    methods: {
        disableChanageEvent: function({ column }) {
            console.log(column)
        },
        init() {
            let that = this
            findByUser().then(res => {
                that.tableData = res
                console.log(res)
            })
        }
    }
}
</script>
<style>
</style>

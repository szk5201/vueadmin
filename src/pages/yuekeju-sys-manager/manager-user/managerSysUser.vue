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
export default {
    data() {
        return {
            tableColumnConfig: configSysUser.managerSysUserConfig.tableColumnConfig,
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
    },
    // mounted() {

    // }
    // ,
    methods: {

    }
}
</script>
<style>
</style>

<template>
<!-- export-config-->
        <vxe-grid
          resizable
          :border="border"
          :height="height"
          :loading="loading"
          :form-config="tableForm"
          :toolbar="tableToolbar"
          :data="tableData"
          :columns="tableColumn"
          :align="align"
          :header-align="headerAlign"
          :highlight-current-row="highlightCurrentRow"
          :highlight-hover-row="highlighthoverRow"
          :show-overflow="showOverflow"
          :show-header-overflow="showHeaderOverflow"
          :show-footer-overflow="showFooterOverflow"
          :auto-resize="autoResize"
          :sort-config="sortConfig"
          :export-config="exportConfig"
          :filter-config="filterConfig"
          :import-config="importConfig"
          :tooltip-config="tooltipConfig"
          :pager-config="pagerConfig"
          :context-menu="contextMenu"
          :keyboard-config="keyboardConfig"
          :edit-config="editConfig"
          :edit-rules="editRules"
          :valid-config="validConfig"
          :animat="animat"
          :zoom-config="zoomConfig"
          ref="refname"
          :keep-source="keepSource"
          @toolbar-button-click="toolbarButtonClickEvent"
          @button-click="buttonClick"
          @page-change="handlePageChange"
          @form-submit="formSubmit"
          @form-reset="formReset">
        </vxe-grid>
</template>
<script>
import propsConfig from './util/prop.js'
import methodsconfig from './util/method.js'
import tableGlobalConfigIn from './util/data.js'
export default {
    data () {
        return {
            tableForm:
            {
                data: this.tableFormData,
                items: this.tableFormConfig
            },
            tableToolbar:
             {
                 refresh: this.refresh,
                 export: this.export,
                 custom: this.custom,
                 import: this.import,
                 buttons: this.tableToolBarButton
             },
            tableColumn: this.tableColumnConfig,
            tablePage: tableGlobalConfigIn.tableGlobalConfigIn.tablePage

        }
    },
    created () {
    },
    methods: {
        seqMethod: function(e) {
            this.$emit('seqMethod', e)
        },
        keydown: function(e) {
            this.$emit('keydown', e)
        },
        radioChange: function(obj, e) {
            this.$emit('radioChange', obj, e)
        },
        checkboxChange: function(obj, e) {
            this.$emit('checkboxChange', obj, e)
        },
        checkboxAll: function(obj, e) {
            this.$emit('checkboxAll', obj, e)
        },
        cellClick: function(obj, e) {
            this.$emit('checkboxAll', obj, e)
        },
        toolbarButtonClickEvent: function(data, e) {
            if (data.code === 'add_actived') {
                this.insertClick(data, e)
            } else if (data.code === 'update_actived') {
                this.updateClick(data, e)
            } else if (data.code === 'delete_actived') {
                this.deleteClick(data, e)
            } else {
                this.otherClick(data, e)
            }
        },
        insertEvent: function() {
            this.$emit('insertEvent')
        },
        // 点击按钮事件
        buttonClick: function(code, e) {
            console.log(code)
            console.log(e)
            // this.$emit('buttonClick', val, e)
        },
        insertClick: function(code, e) {
            this.$emit('insertClick', code, e)
        },
        updateClick: function(code, e) {
            this.$emit('updateClick', code, e)
        },
        deleteClick: function(code, e) {
            this.$emit('deleteClick', code, e)
        },
        otherClick: function(code, e) {
            this.$emit('otherClick', code, e)
        },
        formSubmit: function(data, e) {
            this.$emit('formSubmit', data, e)
        },
        formReset: function(data, e) {
            this.$emit('formReset', data, e)
        },
        getCheckboxRecords: function() {
            return this.$refs.refname.getCheckboxRecords()
        },
        ...methodsconfig
    },
    props: {
        ...propsConfig
    }
}

</script>

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
          @button-click="buttonClick">
        </vxe-grid>
</template>
<script>
import propsConfig from './util/prop.js'
// import tableGlobalConfigIn from './util/data.js'
export default {
    data () {
        return {
            tableForm:
            {
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
            tableColumn: this.tableColumnConfig
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
        toolbarButtonClickEvent: function(e) {
            this.$emit('toolbarButtonClickEvent', e)
        },
        insertEvent: function() {
            this.$emit('insertEvent')
        },
        // 点击按钮事件
        buttonClick: function(code, e) {
            // this.$emit('buttonClick', val, e)
            if (code === 'add_actived') {
                this.insertClick(code, e)
            } else if (code === 'update_actived') {
                this.updateClick(code, e)
            } else if (code === 'delete_actived') {
                this.deleteClick(code, e)
            } else {
                this.otherClick(code, e)
            }
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
        disableChanageEvent: function(e) {
            console.log('111')
        }
    },
    props: {
        ...propsConfig
    }
}

</script>

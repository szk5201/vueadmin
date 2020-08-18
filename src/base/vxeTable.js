/* eslint-disable no-undef */
import 'xe-utils'
import VXETable from 'vxe-table'
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
import XEClipboard from 'xe-clipboard'
import VXETablePluginElement from 'vxe-table-plugin-element'
import VXETablePluginMenus from 'vxe-table-plugin-menus'
const vxeTable = {
  install: function(Vue) {
    VXETable.use(VXETablePluginMenus)
    VXETable.use(VXETablePluginExportXLSX)
    VXETable.use(VXETablePluginElement)
    // 给 vue 实例挂载全局窗口对象，属性名称随意定义，例如：$XModal
    Vue.use(VXETable)
    // Vue.prototype.$XEUtils = XEUtils
    Vue.prototype.$VXETable = VXETable
    Vue.prototype.$modal = VXETable.modal
    Vue.prototype.$XEClipboard = XEClipboard
  }
}
export default vxeTable

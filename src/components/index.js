import basTable from './vex/table/index'
import eleForm from './Form/index'

function plugins(Vue) {
    Vue.component('basTable', basTable)
    Vue.component('eleForm', eleForm)
}
export default plugins

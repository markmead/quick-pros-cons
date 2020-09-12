import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import SettingsSVG from '@/components/global/icons/Settings'
import CloseSVG from '@/components/global/icons/Close'
import DragSVG from '@/components/global/icons/Drag'
import AddSVG from '@/components/global/icons/Add'
import Button from '@/components/global/Button'

Vue.use(Vuelidate)

Vue.component('SettingsSVG', SettingsSVG)
Vue.component('CloseSVG', CloseSVG)
Vue.component('DragSVG', DragSVG)
Vue.component('AddSVG', AddSVG)
Vue.component('Button', Button)

import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

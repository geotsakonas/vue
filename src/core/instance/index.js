import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { 
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue

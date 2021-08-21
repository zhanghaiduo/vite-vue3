import { createStore } from 'vuex'
import zhangqi from './zhangqi/demo' // zhangqi 项目的 store


export default createStore({
  modules: {
    zhangqi
  }
})


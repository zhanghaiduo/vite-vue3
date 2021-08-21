<template>
 <div>
  zhangqi store{{count}}
 </div>
</template>

<script >
// 导入相关api
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    let count = computed(() => store.state.zhangqi.count) // 这里注意指定user模块
    return {
      count
    }
  }

}
</script>

<style scoped lang="scss">
div{
  @include Bg();
  color:$error;
  font-size: 16px;
}
</style>

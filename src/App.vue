<script lang="ts" setup>
import { ref, provide } from 'vue';
import { createService } from './hooks/soa'
import {
  InjectCollapsed,
  InjectIsMob,
  InjectIsTabs,
  InjectShowFooter,
  RouterFadeType,
  InjectTransition,
  InjectIsLogin
} from './context'

const collapsed = ref<boolean>(false)
const isMob = ref<boolean>(false)
const isTabs = ref<boolean>(true)
const showFooter = ref<boolean>(false)
const transition = ref<RouterFadeType>('fade-right')
const isLogin = ref<boolean>(false)

provide(InjectCollapsed, collapsed)
provide(InjectIsMob, isMob)
provide(InjectIsTabs, isTabs)
provide(InjectShowFooter, showFooter)
provide(InjectTransition, transition)
provide(InjectIsLogin, isLogin)
//-----------------------------------------
const test = () => {
  return {
    a: 1,
    b: function () {
      console.log(123)
    },
    c: [1, 2, 3]
  }
}

</script>

<template>
  <router-view />
</template>
<style lang="scss">
</style>
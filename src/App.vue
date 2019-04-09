<template>
  <div id="app">
    <keep-alive>
    <!--根页面-->
    <router-view></router-view>
  </keep-alive>
   <!--页面切换-->
    <app-tabs/>
   
  </div>
</template>

<script>
import Tabs from './components/Tabs'
export default{
  components:{
    [Tabs.name]:Tabs
  },
  
}

</script>

<style lang="scss">

</style>

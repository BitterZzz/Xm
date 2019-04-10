<template>
    <!-- 购物车头部 -->
      <header class="cart-header">
            <van-icon class="left" @click="goBack" name="arrow-left"/>
            <h4>购物车</h4>
            <van-icon class="search" name="search"/>
      </header>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'cart-header',

  methods:{
      goBack(){
           this.$router.go(-1)
      }
  }

}
</script>

<style lang="scss" scoped>
  .cart-header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        background: #f2f2f2;
        color: #999;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
         .left{
             font-size: 22px;
             color: #999;
         }
         h4{
             font-weight: normal;
             color: #666;
         }
          .search{
              font-size: 24px;
               color: #999;
          }
  }
</style>

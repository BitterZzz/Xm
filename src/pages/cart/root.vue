<template>
<div class="page" id="cart">
    <!-- 购物车头部-->
    <cart-header></cart-header>
    <!-- <h1>购物车</h1> -->
    <!-- 购物车主体内容 -->

    <cart-content></cart-content>

   
    
</div>
</template>
<script>
import CartHeader from './children/cart-header'
import CartContent from './children/cart-content'
export default {
   components:{
       [CartHeader.name]:CartHeader,
       [CartContent.name]:CartContent
   }

}
</script>

<style>

</style>

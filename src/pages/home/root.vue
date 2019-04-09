<template>
<div>
    <div class="page" id="home">
    <!--首页头部-->
    <home-header></home-header>
    <home-menu v-model="selectMenu"></home-menu>
    </div>


</div>

</template>

<script>
import HomeHeader from "./children/home-header";//引入首页的头部
import HomeMenu from "./children/home-menu"; //引入首页的菜单
    export default{
        components:{
             [HomeHeader.name]:HomeHeader,
            [HomeMenu.name]:HomeMenu,
        },
        data(){
            return{
                selectMenu:0,
            }
        },
    computed: {
        // 计算选中菜单的id值
        menuId(){
            if(this.selectMenu> 0){ //如果selectMenu> 0就返回id 的值
                // 计算id，因为menuList的id比selectMenu小1，所以用selectMenu-1就可以得到 menuId
                return this.$store.state.home.menuList[this.selectMenu-1].id;
            }else{  //如果selectMenu<=0或者其它就返回null，因为推荐的id是0
                return null;
            }
        }
    },

    }


</script>

<style lang="scss" scoped>
#home{
    .content{
        width: 100%;
        position: absolute;
        top: 69px;
        left: 0;
        bottom: 0; 
    }
}
</style>
